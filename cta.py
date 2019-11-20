from flask import *

app = Flask(__name__)

@app.route("/")
def index():  
    return "<a href=\"../\">back</a>"

if __name__ == "__main__":  
    app.run(port=8082)

