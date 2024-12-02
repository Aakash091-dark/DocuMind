from flask import Blueprint, request, jsonify
import tika
from tika import parser

bp = Blueprint('ingestion', __name__)

@bp.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['document']
    raw = parser.from_file(file)
    return jsonify({"content": raw['content'], "metadata": raw['metadata']})
