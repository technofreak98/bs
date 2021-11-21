from app import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String())
    product_price = db.Column(db.Integer())

    def __init__(self, product_name, product_price):
        self.product_name = product_name
        self.product_price = product_price

    def __repr__(self):
        return '<id {}>'.format(self.id)
