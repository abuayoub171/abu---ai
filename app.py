from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# ===== MEMORY =====
clients = {}

def get_client(user_id):
    if user_id not in clients:
        clients[user_id] = {
            "history": [],
            "service": None,
            "last_seen": None
        }
    return clients[user_id]

# ===== SMART AI =====
def smart_reply(client, message):
    msg = message.lower()

    if "taxi" in msg or "ride" in msg:
        client["service"] = "taxi"
        return "🚗 pickup አድራሻ ላክ"

    elif "price" in msg:
        return "💰 estimated price = 150 ETB"

    elif "confirm" in msg:
        return "✅ Ride confirmed! Driver coming 🚗"

    elif "pay" in msg:
        return "💳 Payment received (Demo)"

    elif "hello" in msg or "ሰላም" in msg:
        return "ሰላም 👋 እንዴት ልርዳ?"

    elif "training" in msg:
        return "We provide AI training and system development."

    elif "help" in msg:
        return "I am here to assist you with AI services."

    else:
        return "I understand you. Tell me more."

# ===== CHAT API =====
@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_id = data.get("user_id", "default")
    message = data.get("message", "")

    client = get_client(user_id)

    client["history"].append({"user": message})
    client["last_seen"] = str(datetime.now())

    reply = smart_reply(client, message)

    client["history"].append({"bot": reply})

    return jsonify({"reply": reply})

# ===== ANALYTICS =====
@app.route("/analytics")
def analytics():
    return {
        "total_users": len(clients),
        "clients": clients
    }
@app.route("/admin")
def admin():
    return {
        "total_users": len(clients),
        "clients": clients
    }

@app.route("/")
def home():
    return "AI Backend is running 🚀"

# ===== RUN =====
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)









































+0

