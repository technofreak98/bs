from flask import Flask, request
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
    product_name = request.form.get('product_name')
    product_price = request.form.get('product_price')
    product_metadata = {
        'name' : product_name,
        'price' : product_price
    }
    print(product_metadata)
    try:
        result = Product(
            product_name=product_name,
            product_price=product_price
        )
        db.session.add(result)
        db.session.commit()
        print('Success')
    except Exception as e:
        print("Unable to add item to database.")
        print(e)
    return product_metadata


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
