// DONE ✅  Import API_ENDPOINT
import {API_ENDPOINT} from "./index.js";

// DONE ✅ Create the addNewBook function that takes in newTitle, newStart, and newEnd as arguments. Inside the function, create a POST request for the new book. Store the response as a JSON in a variable called newBook and return it at the end of the function.
export const addNewBook = async (newTitle, newStart, newEnd) => {
    const response = await fetch(`${API_ENDPOINT}/books`, {
      method: "POST",
      body: JSON.stringify({
        title: newTitle,
        start: newStart,
        end: newEnd
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //   create a variable that will wait for the response in json format ✅
      const newBook = await response.json();
      console.log(`${newTitle} added to the book list ✅`)
      return newBook;
  };

// DONE ✅ Create the getBooks function that retrieves all of the books that have been saved to the back-end API
export const getBooks = async  () => {
    const response = await fetch(`${API_ENDPOINT}/books`);
    const books = await response.json();

    console.log("Book list fetched ✅")
    return books;
};


// DONE ✅  Create the updateBook function that takes the arguments id, newTitle, newStart, newEnd. Inside of the function, create a PUT request for the specified book to be updated. Return the status of the response at the end of the function.
export const updateBook = async (id, newTitle, newStart, newEnd) => {
    const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title: newTitle,
            start: newStart,
            end: newEnd
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    console.log(`Book updated: ${newTitle} ✅`)
    return response.status;
};

// DONE ✅  Create the deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.
export const deleteBook = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
        method: "DELETE",
      });
      console.log(`Book with ID: ${id} deleted ✅`)
      return response.status;
};
