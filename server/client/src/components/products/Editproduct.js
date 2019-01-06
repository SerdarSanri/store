import React,{Component} from 'react'
import {reduxForm,Field} from "redux-form"

const Editproduct (props) => {
   const { onSubmit, handleSubmit, pristine, submitting, invalid } = props;
   return(
      <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-group">
           <label><b>Product Name</b></label>
            <Field
              name="name"
              type="text"
              component="input"
              autoComplete="none"
              className = "form-control"
            />
           </div>
           <div className="form-group">
           <label><b>Category</b></label>
            <Field
              name="category"
              type="text"
              component="input"
              autoComplete="none"
              className = "form-control"
            />
           </div>
           <div className="form-group">
           <label><b>Quantity</b></label>
            <Field
              name="quantity"
              type="number"
              component="input"
              autoComplete="none"
              className = "form-control"
            />
           </div>
           <div className="form-group">
           <label><b>Price</b></label>
            <Field
              name="price"
              type="number"
              component="input"
              autoComplete="none"
              className="form-control"
            />
           </div>
           <button className="btn btn-primary" disabled={pristine|invalid|submitting} >Add Product</button>

      </form>
  );
}
export default reduxForm({
   form: 'editProduct'
})
