export default class GoTService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
    
        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResource('/characters?page=7&pageSize=10');
        return res.map(this._trasformCharacter);
    }

    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._trasformCharacter(character);
    }

    getAllBooks() {
        return this.getResource('/books')
    }

    getBook(id) {
        return this.getResource(`/books/${id}`)
    }

    getAllHouses() {
        return this.getResource('/houses')
    }
    
    getHouse(id) {
        return this.getResource(`/houses/${id}`)
    }

    _trasformCharacter(char) {

        for (let key in char) {
            if (!char[key]) {
                char[key] = 'No data';
            }
        }

        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformBook(book) {
        for (let key in book) {
            if (!book[key]) {
                book[key] = 'No data';
            }
        }

        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }

    _transformHouse(house) {
        for (let key in house) {
            if (!house[key]) {
                house[key] = 'No data';
            }
        }

        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overload: house.overload,
            ancestralWeapons: house.ancestralWeapons
        }
    }
}
