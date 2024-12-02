from flask import Flask
from app.routes import ingestion, nlp, insights, search

app = Flask(__name__)
app.register_blueprint(ingestion.bp)
app.register_blueprint(nlp.bp)
app.register_blueprint(insights.bp)
app.register_blueprint(search.bp)

if __name__ == "__main__":
    app.run(debug=True)
