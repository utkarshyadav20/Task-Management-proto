// making a state object to store the inf given by the user object->array->object is used to provide further functionality so that we can add new stuff easily whenever we update our website
const state={
    taskList:[
        {
         Image_url:"",
         Task_title:"",
         Task_type:"",
         Task_des:"",
        },
        {
            Image_url:"",
            Task_title:"",
            Task_type:"",
            Task_des:"",
   
        },
        {
            Image_url:"",
            Task_title:"",
            Task_type:"",
            Task_des:"",
   
        },

    ],
      
};

// accessing the empty div we created inside our DOM to save the info entered by the user insite the a variable with the help of document.querysSelector() method
const taskContent=document.querySelector(".task_content");
//after saving the info inside our DOM we also need to access it we  do this with the help of taskModal variable we craeted
const taskModal=document.querySelector(".task_modal_body");
console.log(taskContent);