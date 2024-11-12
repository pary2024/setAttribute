

document.getElementById("btn-submite").addEventListener('click', ()=>{
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const qty   = document.getElementById('qty').value;
    const pic   = document.getElementById('pic').files;
    const imageUrl = URL.createObjectURL(pic[0]);
    //create picture go to link 
    console.log(imageUrl);

    const root = document.getElementById('root');
    root.innerHTML += ` 
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${price}</td>
                <td>${qty}</td>
                <td>
                  <img style="height: 60px" src="${imageUrl}" alt="">
                </td>
                <td>
                  <button class="btn-edite btn btn-primary">edite</button>
                  <button class=" btn btn-danger">delete</button>
                </td>
            </tr>`;

           // Select all elements with the class 'btn-edite'
           
           
})
          
          
// Add Event Listener to Submit Button
// document.getElementById("btn-submite").addEventListener('click', () => {
//   // Get input values
//   const id = document.getElementById('id').value;
//   const name = document.getElementById('name').value;
//   const price = document.getElementById('price').value;
//   const qty = document.getElementById('qty').value;
//   const pic = document.getElementById('pic').files;
//   const imageUrl = URL.createObjectURL(pic[0]);

//   // Log image URL (for testing)
//   console.log(imageUrl);

//   // Add new row to table
//   const root = document.getElementById('root').getElementsByTagName('tbody')[0];
//   const newRow = root.insertRow();

//   newRow.innerHTML = `
//       <td>${id}</td>
//       <td>${name}</td>
//       <td>${price}</td>
//       <td>${qty}</td>
//       <td><img style="height: 60px" src="${imageUrl}" alt="Product Image"></td>
//       <td>
//           <button class="btn-edite btn btn-primary">Edit</button>
//           <button class="btn btn-danger">Delete</button>
//       </td>
//   `;

//   // Add event listener for "Edit" button in the newly added row
//   newRow.querySelector('.btn-edite').addEventListener('click', () => {
//       // Fill the modal with the existing row data
//       document.getElementById('edit-id').value = id;
//       document.getElementById('edit-name').value = name;
//       document.getElementById('edit-price').value = price;
//       document.getElementById('edit-qty').value = qty;
//       document.getElementById('edit-pic').value = '';  // Handle image separately if needed
      
//       // Open modal to edit the details
//       const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
//       modal.show();

//       // Save changes when "Save changes" button is clicked
//       document.getElementById('btn-save-changes').addEventListener('click', () => {
//           // Update row data
//           newRow.cells[0].textContent = document.getElementById('edit-id').value;
//           newRow.cells[1].textContent = document.getElementById('edit-name').value;
//           newRow.cells[2].textContent = document.getElementById('edit-price').value;
//           newRow.cells[3].textContent = document.getElementById('edit-qty').value;
          
//           // Close the modal after saving
//           modal.hide();
//       });
//   });

//   // Add event listener for "Delete" button in the newly added row
//   newRow.querySelector('.btn.btn-danger').addEventListener('click', () => {
//       // Remove the row
//       root.deleteRow(newRow.rowIndex - 1);
//   });
// });
