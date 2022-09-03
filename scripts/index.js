// making a state object to store the info given by the user object->array->object is used to provide further functionality so that we can add new stuff easily whenever we update our website
const state={
    taskList:[

    ],
      
};

// accessing the empty div we created inside our DOM to save the info entered by the user insite the a variable with the help of document.querysSelector() method
const taskContent=document.querySelector(".task_content");
//after saving the info inside our DOM we also need to access it we  do this with the help of taskModal variable we craeted
const taskModal=document.querySelector(".task_modal_body");
//making a function to add html in the DOM whenerver new entry is created
const CreateTaskContent=({id,url,title,description,type})=>{`
<div class="col-md-6 col-lg-4 mt-3 " id=${id} key=${id}>
  <div class="card shadow-sm task_card">
    <div class="card-header d-flex gap-2 justify-content-end task_card_header">
         <button type="button" class="btn btn-outline-info mr-2" name=${id}>
          <i class="fas fa-pencil-alt" name=${id}></i>
         </button>
         <button type="button" class="btn btn-outline-danger mr-2" name=${id}>
          <i class="fas fa-trash-alt" name=${id}></i>
         </button>
    </div>
    <div class="card-body">
          ${
            url && `<img width="100%" src=${url} alt="card_image_cap" class="card-image-top md-3 rounded-lg">`
          }
          <h4 class="class_card_title">${title}</h4>
          <p class="description trim-3-lines text-muted" data-gram_editor="false">
            ${description}
          </p>
          <div class="tags text-white d-flex flex-wrap">
            <span class="badge bg-success m-1">
              ${type}
            </span>
      </div>
    </div>
    <div class="card-footer">
       <button type="button" class="btn btn-outline-primary float-end" data-bs-toggle="modal" data-bs-target="#ShowTasks">Open Task</button>
    </div>
  </div>
  </div>   
`

};
// making a function to acces a saved enrty

const AccessTaskContent=({id,url,title,description,type})=>{
  //we used parse int because the attributes like id,url,title,description,type are saved in the form of a string to convert them into int we use the parseInt
     const date=new Date(parseInt(id));    //inserting the unique current date and time as id
     return `
     <div id=${id}>
     ${url &&

      ` <img src=${url} alt="Image" class="img-fluid place_holder_image mb-3">`
     }
     <strong class="text-sm-start text-muted">Created on ${date.toDateString()}</strong>
     <h2 class="my-3">${title}</h2>
     <p class="Lead">${description}</p>
     
    </div>
`;
};
//saving the data to local storage
const updateLocalStorage= () => {
   localStorage.setItem("tasks",JSON.stringify({
    task:state.taskList,
   }));
};
//getting the data from local storage
const loadInitialdata=()=>{
    const localStorageCopy=JSON.parse(localStorage.tasks);
    
};
