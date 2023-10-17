const body = document.body
body.style.backgroundColor = 'white'
body.style.color = 'black'
body.style.textAlign = 'center'



const listForm = document.querySelector('#list-form')
const listContainer = document.querySelector('#list-container')

const toDoAPP = document.createElement('ul')
toDoApp.innerText = 'TO DO APP'
toDoAPP.style.fontSize = '50px'; toDoAPP.style.listStyle = 'none'
toDoAPP.style.marginLeft = '100px'; toDoAPP.style.marginRight = '575px'

listContainer.append(toDoAPP)

listItemApp.addEventListener('submit', (e) => {
    e.preventDefault()
    const listItem = getItem()
    const itemDesc = getDesc()
    ListItemAPP(listItem, itemDesc)}
    )
    

    


    




// script.js

// Wait until the HTML content is fully loaded before running the script
//document.addEventListener("DOMContentLoaded", function() {
    // Reference to the form element
    // ...

    // Reference to the list that displays the to-do items
    // ...

    // Reference to the input field for the title of the to-do item
    // ...

    // Reference to the textarea for the description of the to-do item
    // ...

    // Event listener for the form submission
    //todoForm.addEventListener("submit", function(event) {
        // Prevent the default form submission action
        // ...

        // Create a new list item for the to-do
        // ...

        // Set the inner HTML of the list item to the title and description
        // ...

        // Attach a click event to the list item
        //listItem.addEventListener("click", function() {
            // If the item is already marked as done, remove it from the list
            // ...

            // Otherwise, mark the item as done by adding the "done" class
            // ...
     

        // Append the newly created list item to the to-do list
        // ...

        // Clear the form fields after adding the to-do item
 