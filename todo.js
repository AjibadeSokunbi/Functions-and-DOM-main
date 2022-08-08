// DOM MANIPULATION

const textInput = document.querySelector("#text-input");
const todoCount = document.querySelector("#todo-count");
const todoList = document.querySelector("#todo-list");

// 1. Add an event listener to the input field
textInput.addEventListener("keypress", function (event) {
  if (event.code === "Enter") {
    console.log(event);
    // 2. Get the input value
    const inputValue = event.target.value;
    
    // 3. Append the value to the todo list
    todoList.innerHTML += `<li>
                        <label>
                        <input class="complete" type="checkbox" />
                        <span>${inputValue}</span>
                        <button class="remove">remove </button>
      </label>
                    </li>`;
 // implement the 'Remove' item feature on your own
    if (todoList.hasChildNodes()) {
      const removeBtns = document.querySelectorAll(".remove");

      removeBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          event.target.parentElement.parentElement.style.display = "none";

          counter -= 1;
          todoCount.textContent = counter;
        });
      });
    }
          
        const completeBtn = document.querySelector(".complete");
        completeBtn.forEach((btn) =>{
         btn.addEventListener("change")
        })   
        
                    
    // 4. Update the todo counter
    let counter = Number(todoCount.textContent);

    counter += 1;
    todoCount.textContent = counter;

    
    // 5. Clear the input field
    event.target.value = "";
  }
});