const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const finalPrice = (p,d) => Math.round( p - (p*(d/100)))

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products, toThousand})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const {id} = req.params
		const productDetail = products.find(e => e.id === +id)
		res.render ('detail', {productDetail, toThousand, finalPrice})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const object = req.body
		object.id = products.length
		products.push(product)
		fs.writeFileSync(productsFilePath, JSON.stringify(products))
		res.redirect('/products/detail/${product.id}')
	},

	// Update - Form to edit
	edit: (req, res) => {
		const productEdit = products.find(e => e.id === +req.params.id)
		res.render('product-edit-form', {productEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;