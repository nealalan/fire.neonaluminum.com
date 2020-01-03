from flask import *

app = Flask(__name__)

@app.route("/")
def index():
	return "this works"


if __name__ == "__main__":
    app.run(port=8083)


