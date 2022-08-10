const mongoose = require('mongoose');
const BooksSchema = require('./Schema');
const BookModel = mongoose.model('BookModel', BooksSchema);



const theSecret = new BookModel({
    title: 'The Secret',
    description: 'he Secret is a self-help book by Rhonda Byrne that explains how the law of attraction, which states that positive energy attracts positive things into your life, governs your thinking and actions, and how you can use the power of positive thinking to achieve anything you can imagine',
    image: 'https://www.thesecret.tv/wp-content/uploads/2020/04/the-secret.jpg',
    status: true
});

const richDadPoorDad = new BookModel({
    title: 'Rich Dad Poor Dad',
    description: 'Robert"s story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing',
    image:'https://tinyurl.com/2jguhhvc',
    status: true
});

const hamlet = new BookModel({
    title: 'Hamlet by William Shakespeare',
    description: "Hamlet is melancholy, bitter, and cynical, full of hatred for his uncle's scheming and disgust for his mother's sexuality. A reflective and thoughtful young man who has studied at the University of Wittenberg, Hamlet is often indecisive and hesitant, but at other times prone to rash and impulsive acts",
    image : 'https://tinyurl.com/2jnzc4mc',
    status: true
})
theSecret.save();
richDadPoorDad.save();
hamlet.save();

module.exports = BookModel