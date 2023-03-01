const state={
  tasklist:[],
};

const taskConetent=document.querySelector(".task_content"); //object to access the empty div where new data will be placed
const taskMOdal=document.querySelector(".task_modal_body");  //object to open thr data after saving it 

// console.log(taskConetent);
// javascript to save a card after saving
const htmlTaskContent=({id,title,description,type,url})=>
    `
    <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
       <div class="card shadow-sm task__card">
         <div class="card-header d-flex gap-2 justify-content-end task__card__header">
           <button type="button" class="btn btn-outline-info mr-2" name=${id}>
             <i class="fas fa-pencil-alt" name=${id}> </i>
           </button>
           <button type="button" class="btn btn-outline-danger mr-2" name=${id}>
             <i class="fas fa-trash-alt" name=${id}></i>
           </button>
           </div>


             <div class="card-body">
              ${
                url && //if url is entered then only show the next line 
                `<img  width="100%" height="150px" style="object-fit:cover; object-position:centre" src=${url} alt="card image" class="card-img-top md-3 rounded-lg">`
              }
              <h4 class="mt-2 task_card_title">${title}</h4>

              <p class="description trim-3-lines text-muted" data-gram_editor="false">${description}</p>
                  <div class="tags text-white d-flex flex-wrap">
                    <span class="badge bg-primary m-1">${type}</span>
                  </div>
             </div>

        <div class="card-footer">
          <button type="button" 
            class="btn btn-outline-primary flaot-right" 
            data-bs-toggle="modal" 
            data-bs-target="#ShowTasks"> 
            Open Task
          </button>
       </div>      
         </div>
       </div>
    </div>
    `;

// js to open the card saved in the modal format
const htmlModalContent=({id,title,description,url})=>{
    const date=new Date(parseInt(id));
    return `
      <div id=${id}>
        ${
          url && `
             <img width="100%" src=${url} alt="card img cap" class="img-fluid place__holder__image mb-3">
          `
        }
        <strong class="text-sm text-muted">Created on${date.toDateString()}</strong>
        <h2 class="my-3">${title}</h2>
        <p class="lead">
          ${description}
        <p/>
      </div>
    `;
};
 
const updateLocalStorage=()=>{
    localStorage.setItem("Tasks",JSON.stringify({ //you can also strigify array or list in this method
      Tasks:state.tasklist  //localstorage only takes values in the form of so to pass obrjct a striong we use JSON.strigify(js object notation) first storing the objet into Tasks and then to to task in string format
    })
    );
};

const LoadInitialData=()=>{
   const LocalStorageCopy=JSON.parse(localStorage.Tasks);

   if(LocalStorageCopy) state.tasklist=LocalStorageCopy.Tasks;

   state.tasklist.map((cardData)=>{
           taskConetent.insertAdjacentHTML("beforeend",htmlTaskContent(cardData));
   });

};

const handleSubmit=(event)=>{
   const id=`${Date.now()}`;
   const input={
        url:document.getElementById("Image-URL").value,
        title:document.getElementById("Title-text").value,
        type:document.getElementById("Task-Type").value,
        description:document.getElementById("Task-Des").value,
   };
   if(input.title==""||input.type==""||input.description==""){
         return alert("Please enter all the fields");
   }
   taskConetent.insertAdjacentHTML(
    "beforeend",
    htmlTaskContent({
      ...input,       // ... is spreader to pass obejct containing multiple values properly
      id,
    })
   );
   state.tasklist.push({...input,id});
   updateLocalStorage();

};

