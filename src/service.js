import random from 'lodash/random';

const quotes = [
    'First quote',
    'Second quote',
    'Third quote',
];

/**
 * Retrive a random quote
 * 
 * @return {String} random quote
 */
function randomQuote() {
    return quotes[random(quotes.length - 1)];
}

/**
 * Retrieve a random quote async
 * 
 * @return {Promise<String>} random quote
 */
function randomQuoteAsync() {
    const MAX_SLEEP_TIME = 1000;
    const sleepTime = Math.ceil(Math.random() * MAX_SLEEP_TIME);

    return new Promise(resolve => setTimeout(() => resolve(randomQuote()), sleepTime));
}

export {
    randomQuote,
    randomQuoteAsync,
};