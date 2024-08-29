export const getShortUrl = () => {
    const letters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shortUrlLength = 7;
    let shortUrl: string = '';
    for (let i: number = 0; i < shortUrlLength; i++) {
       const randomLetterIndex = Math.floor(Math.random() * letters.length);
       shortUrl += letters[randomLetterIndex];
    }
    return shortUrl;
};