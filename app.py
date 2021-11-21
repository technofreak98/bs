from flask import Flask, redirect, url_for, request

app = Flask(__name__)


@app.route('/add', methods =['POST'])
def hello_world():
    product_name = request.form['product_name']
    product_price = request.form['product_price']
    product_object = {
        "name" : product_name,
        "price" : product_price
    }
    return product_object


if __name__ == '__main__':
    app.run()
