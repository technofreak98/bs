from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os


app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from models import Product


@app.route('/')
def hello():
    return "Hello World!"


@app.route('/add',methods=['POST'])
def add_product():
    return "Hello!"


if __name__ == '__main__':
    app.run()
