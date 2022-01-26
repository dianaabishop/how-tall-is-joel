from flask import Flask
from flask import (request, session, render_template, abort, jsonify)
from flask import render_template 
import requests
import json 
from flask import g

app = Flask(__name__)
app.secret_key = "secret"

@app.route("/", methods = ['GET'])
def home():
    return render_template('app.html')



