const { getQueryFromUser, fetchData, parseBooks } = require("../books");
const mockAxios = require("axios");
const searchData = require("../__mocks__/searchData");

describe("getQueryFromUser", () => {
  it("should allow an input of a single word", () => {
    const query = "Catcher";
    const expected = "Catcher";
    expect(getQueryFromUser(query)).toBe(expected);
  });

  it("should allow an input of two words", () => {
    const query = "Catcher In";
    const expected = "Catcher%In";
    expect(getQueryFromUser(query)).toBe(expected);
  });

  it("should allow an input of more than two words", () => {
    const query = "Catcher In The Rye";
    const expected = "Catcher%In%The%Rye";
    expect(getQueryFromUser(query)).toBe(expected);
  });
});

describe("fetchData", () => {
  it("should return 5 items from API fetch", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(searchData.raw));
  
    let searchQuery = "Catcher%In%The%Rye";
  
    return await fetchData(searchQuery).then((response) => {
      expect(response.items.length).toEqual(5);
      expect(mockAxios.get).toHaveBeenCalledWith(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=5`
      );
    });
  });
  
  it("should fetch results from google books api", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(searchData.raw));

    let searchQuery = "Catcher%In%The%Rye";

    return await fetchData(searchQuery).then((response) => {
      expect(response).toEqual(searchData.raw.data);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=5`
      );
    });

  });

});