import React,{Component} from 'react'
import {reduxForm,Field} from "redux-form"
import * as actions from "../../actions"
import {compose} from "redux"
import {connect} from "react-redux"
import  requireAuth from "../requireAuth"

class Editproduct extends Component{
   
    onSubmit=(formProps)=>{
        this.props.editProduct(formProps,()=>{
            this.props.history.push("/home")
        })
    }
    
    render(){
        const editPro = this.props.location.state
        console.log(editPro)

         const data={
            id:editPro.id,
            name:editPro.name,
            category:editPro.category,
            price:editPro.price,
            quantity:editPro.quantity
         }
         console.log(data)
        const {handleSubmit}=this.props
        
    }

}
function mapStateToProps(){
  
}


export default compose(
    connect(null, actions),
     reduxForm({form:"editProduct"})
    ,requireAuth)(Editproduct)
