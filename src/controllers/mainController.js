const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let offer = products.filter(element => element.category === "in-sale")
		let visited = products.filter(element => element.category === "visited")
		res.render('index', {toThousand, offer, visited})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
