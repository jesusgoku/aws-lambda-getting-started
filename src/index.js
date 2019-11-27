import { randomQuoteAsync } from './service';

async function handler(event, context) {
    const statusCode = 200;
    const body = JSON.stringify({
        statusCode,
        quote: await randomQuoteAsync(),
    }, null, 2);

    return {
        body,
        statusCode,
        headers: {
            'Content-Type': 'application/json'
        },
    };
}

export {
    handler,
};