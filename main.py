from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Home')


@app.route('/project')
def project():
    return render_template('project.html', title='Project No.1')


if __name__ == "__main__":
    app.run(debug=True)
