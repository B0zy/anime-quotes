import animeQuotes from 'animequotes'
import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export function GET() {
    return json(animeQuotes.randomQuote())
}