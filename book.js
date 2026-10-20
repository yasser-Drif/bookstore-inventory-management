var  prompt=require('prompt-sync')();


function menu(){
    let choice = "";
    while(choice !== "0"){
        console.log("========================================================================")
        console.log("                 Bookstore-Inventory-Management-System                  ")
        console.log("========================================================================")
        console.log("1- Add a new book")
        console.log("2- Display all books")
        console.log("3- Search for a book by title")
        console.log("4- Update book quantity")
        console.log("5- Delete a book")
        console.log("6- Display total stock value")
        console.log("0- Exit")
        console.log("========================================================================")
        choice = prompt("Choise between 0 and 6: ")

        switch(choice){
            case "1":
                console.log(" Add a new book")
                break;
            case "2":
                console.log("Display all books")
                break;
            case "3":
                console.log("Search for a book by tittle")
                break;
            case "4":
                console.log("update book quantity")
                break;
            case "5":
                console.log("Delete a book")
                break;
            case "6":
                console.log("Display totale stock value")
                break;
            case "0":
                console.log("========================================================================")
                console.log("      Thank you for using the Bookstore System. Have a great day!       ")
                console.log("========================================================================")
                break;
            default:
                console.log("========================================================================")
                console.log("                      Invalid choice! Try again.                        ")
                console.log("========================================================================")
        }
    }
}



const bookstock = [
    {
        id: 1,
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 85,
        quantity: 20
    },
    {
        id: 2,
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 95,
        quantity: 20
    },
    {
        id: 3,
        name: "1984",
        author: "George Orwell",
        price: 75,
        quantity: 20
    },
    {
        id: 4,
        name: "Animal Farm",
        author: "George Orwell",
        price: 60,
        quantity: 20
    },
    {
        id: 5,
        name: "Pride and Prejudice",
        author: "Jane Austen",
        price: 80,
        quantity: 20
    },
    {
        id: 6,
        name: "Jane Eyre",
        author: "Charlotte Brontë",
        price: 90,
        quantity: 20
    },
    {
        id: 7,
        name: "Wuthering Heights",
        author: "Emily Brontë",
        price: 85,
        quantity: 20
    },
    {
        id: 8,
        name: "The Catcher in the Rye",
        author: "J. D. Salinger",
        price: 100,
        quantity: 20
    },
    {
        id: 9,
        name: "Lord of the Flies",
        author: "William Golding",
        price: 70,
        quantity: 20
    },
    {
        id: 10,
        name: "The Hobbit",
        author: "J. R. R. Tolkien",
        price: 120,
        quantity: 20
    },
    {
        id: 11,
        name: "The Fellowship of the Ring",
        author: "J. R. R. Tolkien",
        price: 150,
        quantity: 20
    },
    {
        id: 12,
        name: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        price: 130,
        quantity: 20
    },
    {
        id: 13,
        name: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        price: 135,
        quantity: 20
    },
    {
        id: 14,
        name: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        price: 65,
        quantity: 20
    },
    {
        id: 15,
        name: "The Alchemist",
        author: "Paulo Coelho",
        price: 90,
        quantity: 20
    },
    {
        id: 16,
        name: "The Book Thief",
        author: "Markus Zusak",
        price: 110,
        quantity: 20
    },
    {
        id: 17,
        name: "The Kite Runner",
        author: "Khaled Hosseini",
        price: 100,
        quantity: 20
    },
    {
        id: 18,
        name: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        price: 105,
        quantity: 20
    },
    {
        id: 19,
        name: "The Hunger Games",
        author: "Suzanne Collins",
        price: 115,
        quantity: 20
    },
    {
        id: 20,
        name: "Catching Fire",
        author: "Suzanne Collins",
        price: 120,
        quantity: 20
    },
    {
        id: 21,
        name: "The Fault in Our Stars",
        author: "John Green",
        price: 95,
        quantity: 20
    },
    {
        id: 22,
        name: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        price: 160,
        quantity: 20
    },
    {
        id: 23,
        name: "The Da Vinci Code",
        author: "Dan Brown",
        price: 110,
        quantity: 20
    },
    {
        id: 24,
        name: "Angels & Demons",
        author: "Dan Brown",
        price: 100,
        quantity: 20
    },
    {
        id: 25,
        name: "The Silent Patient",
        author: "Alex Michaelides",
        price: 125,
        quantity: 20
    },
    {
        id: 26,
        name: "Atomic Habits",
        author: "James Clear",
        price: 140,
        quantity: 20
    },
    {
        id: 27,
        name: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        price: 100,
        quantity: 20
    },
    {
        id: 28,
        name: "Think and Grow Rich",
        author: "Napoleon Hill",
        price: 85,
        quantity: 20
    },
    {
        id: 29,
        name: "Deep Work",
        author: "Cal Newport",
        price: 130,
        quantity: 20
    },
    {
        id: 30,
        name: "The Psychology of Money",
        author: "Morgan Housel",
        price: 120,
        quantity: 20
    }
];

menu();