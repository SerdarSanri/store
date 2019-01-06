import React,{Component} from 'react'
import * as actions from "../../actions"
import {compose} from "redux"
import {connect} from "react-redux"
import  requireAuth from "../requireAuth"
import EditProductForm from "./EditProductForm"

class EditProductContainer extends Component{
   
    onSubmit=(values)=>{
        this.props.editProduct(values, () => {
            this.props.history.push("/home");
        })
    }
    
    render(){
         return (
            <EditProduct onSubmit={this.onSubmit} initialData={this.props.initialData}/>
         );        
    }
}
const mapStateToProps = (state, ownProps) => {   
   return {
      initialData: {...ownProps.editPro}
   }
}


export default compose(
    connect(mapStateToProps, actions),
    ,requireAuth)(EditProductContainer)
