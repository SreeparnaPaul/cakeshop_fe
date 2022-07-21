import React,{useState} from 'react'
import {Form,Button} from "react-bootstrap"
 import '../css/Category.css';



function CategoryForm() {
  
    const [categoryName,setCategoryName] = useState("");
    const [categoryDescription,setCategoryDescription] = useState("");

    
  
    return (
    <div className="container mt-5 category-container">
         <Form className="form-container">
      <Form.Group className="mb-3" controlId="formBasicCategoryName">
        <Form.Label className="label">Category Name</Form.Label>
        <Form.Control type="text" placeholder="Enter category name" value={categoryName} onChange={e => {setCategoryName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label className="label">Category Description</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="About the category" value={categoryDescription} onChange={e => {setCategoryDescription(e.target.value)}}/>
      </Form.Group>
      <Button className="button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CategoryForm