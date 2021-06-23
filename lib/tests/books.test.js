const { getQueryFromUser, fetchBooks, listBooks } = require("../books");

describe("getQueryFromUser", () => {
  it("should allow an input of a single word", () => {
    const query = 'Catcher'
    const expected = 'Catcher'
    expect(getQueryFromUser(query)).toBe(expected);
  });

  it("should allow an input of two words", () => {
    const query = 'Catcher In'
    const expected = 'Catcher%In';
    expect(getQueryFromUser(query)).toBe(expected);
  });

  it("should allow an input of more than two words", () => {
    const query = 'Catcher In The Rye'
    const expected = 'Catcher%In%The%Rye';
    expect(getQueryFromUser(query)).toBe(expected);
  });
});

describe("fetchBooks", () => {
  const getBooks = jest.fn();
  getBooks.mockReturnValue(mockData);

  it("should return 5 items from API fetch", async () => {
    const books = await fetchBooks("Catcher In The Rye");
    expect(books.length).toBe(5);
  });
});

