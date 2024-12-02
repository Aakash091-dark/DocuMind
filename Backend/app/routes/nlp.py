import spacy

nlp = spacy.load("en_core_web_sm")

def extract_entities(text):
    doc = nlp(text)
    return [{"text": ent.text, "label": ent.label_} for ent in doc.ents]

def summarize(text, max_sentences=3):
    # Placeholder for summarization (can use Hugging Face Transformers)
    sentences = text.split('.')
    return '. '.join(sentences[:max_sentences]) + '.'
