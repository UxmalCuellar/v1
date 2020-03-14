<h1 align="center">
  uxmalcuellar.com - version 1.0
</h1>
<p align="center">
  <a href="https://uxmalcuellar.com" target="_blank">uxmalcuellar.com</a> designed and built with Flask.
</p>

![home](https://github.com/UxmalCuellar/v1/blob/master/static/images/homepage.png)

## Setting up environment

Assumed that `virtualenv` and `git` is installed
```
# Clone repository
git clone https://github.com/UxmalCuellar/v1.git

# Create virtual environment
cd v1
virtualenv shiny_new_env 
source shiny_new_env/bin/activate

# Install packages
pip install -r requirents.txt
```

## Running the app 

```
# setting up variables for development
export FLASK_APP=main.py
export FLASK_ENV=development
export FLASK_DEBUG=1

# start serving flask app
flask run
```
In your browser go to **localhost:5000**