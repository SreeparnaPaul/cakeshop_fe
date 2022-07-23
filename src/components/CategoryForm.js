import React,{useState} from 'react'
import {Form,Button} from "react-bootstrap"
import '../css/Category.css';

function CategoryForm() {
 const [form,setForm]=useState([])
 const [errors,setErrors]=useState([])
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

 const handleSubmit=(e)=>{
    e.preventDefault();
    const formErrors =validateForm()
    if(Object.keys(formErrors).length>0){
      setErrors(formErrors)
    }else{
      console.log("form submitted")
      console.log(form)
    }
    
  }

    return (
    <div className="container mt-5 category-container">
         <Form className="form-container" >
      <Form.Group className="mb-3" controlId="formBasicCategoryName">
        <Form.Label className="label">Category Name*</Form.Label>
        <Form.Control type="text" placeholder="Enter category name"
         value={form.categoryName}  
         onChange={(e) => {
          setField('categoryName',e.target.value);
        }}
        isInvalid={!!errors.categoryName}
         />
      <Form.Control.Feedback type='invalid'>{errors.categoryName}</Form.Control.Feedback>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label className="label">Category Description*</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="About the category" 
        value={form.categoryDescription}  onChange={(e) => {
          setField('categoryDescription',e.target.value);
        }}
        isInvalid={!!errors.categoryDescription}
        />
        <Form.Control.Feedback type='invalid'>{errors.categoryDescription}</Form.Control.Feedback>
        </Form.Group>
      <Button className="button" variant="primary" type="submit" onClick={handleSubmit}

      >
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CategoryForm