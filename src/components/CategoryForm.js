import React,{useState} from 'react'
import {Form,Button, Alert} from "react-bootstrap"
import '../css/Category.css';

function CategoryForm() {
 const [form,setForm]=useState([])
 const [errors,setErrors]=useState([])
 const [modal,setModal]=useState(null)
 const setField=(field,value)=>{
  setForm({
    ...form,
   [field] :value
  })
  if(errors[field]){
    setErrors({
      ...errors,
      [field]:null
    })
  }
 }

 const validateForm=()=>{
  const {categoryName,categoryDescription}=form
  const newErrors ={}
  if(!categoryName || categoryName==='')
  newErrors.categoryName="Category name is required!"
  if(!categoryDescription || categoryDescription==='')
  newErrors.categoryDescription="Category description is required!"

  return newErrors;
 }

 const postApi = (categoryData)=>{
    fetch("http://localhost:8082/category/addCategory",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(categoryData)
    }).then( (result)=>{
      result.json()
      .then( (resp)=>{
        console.log("a",resp.status)
        if(resp.status){
          setModal("add")
        }
       else{
        setModal("not added")
       }
        console.log("resp ",resp)
      })
      .catch((err) => console.error("error",err));
    })
 }

 const handleSubmit=(e)=>{
    e.preventDefault();
    const formErrors =validateForm()
    if(Object.keys(formErrors).length>0){
      setErrors(formErrors)
    }else{
      console.log("form submitted")
      console.log(form)
      const categoryData={
        categoryDescription:form.categoryDescription,
        categoryName:form.categoryName,
        status:1
      }
      postApi(categoryData);
      setForm({
        categoryName:"",
        categoryDescription:""
      });
    }
    
  }

    return (
    <div className="container category">
         <Form className="form-container" >
         
       {/*  {modal?
       <Alert variant='success'>Category added successfully</Alert>:null}*/}
      {modal=="add"? <Alert variant='success'><center>Category added successfully</center></Alert>
      :(modal=="not added"?<Alert variant='danger'><center>Category not added</center></Alert>:null)}
         <h2>Add Category</h2>
         
      <Form.Group className="mb-3" controlId="formBasicCategoryName">
        <Form.Label className="label">Category Name*</Form.Label>
        <Form.Control type="text" placeholder="Enter category name"
         value={form.categoryName}  
         onChange={(e) => {
          setField('categoryName',e.target.value);
        }}
        isInvalid={errors.categoryName}
         />
      <Form.Control.Feedback type='invalid'>{errors.categoryName}</Form.Control.Feedback>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label className="label">Category Description*</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="About the category" 
        value={form.categoryDescription}  onChange={(e) => {
          setField('categoryDescription',e.target.value);
        }}
        isInvalid={errors.categoryDescription}
        />
        <Form.Control.Feedback type='invalid'>{errors.categoryDescription}</Form.Control.Feedback>
        </Form.Group>
      <Button className="button" variant="outline-primary" type="submit" onClick={handleSubmit} style={{width:"100%",borderRadius:"25px"}} >
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CategoryForm