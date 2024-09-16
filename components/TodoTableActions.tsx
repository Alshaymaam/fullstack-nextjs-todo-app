"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {Trash } from "lucide-react";
import { deleteTodoListAction } from "@/actions/todo.actions";
import Spinner from "./Spinner";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";

const TodoTableActions = ({todo}:{todo:ITodo}) => {
const [loading,setLoading]=useState(false)
return (
<>    
   <EditTodoForm todo={todo}/>
    <Button size={'icon'} variant={'destructive'} onClick={
    async()=>{
        setLoading(true)
        await deleteTodoListAction({id:todo.id})
        setLoading(false)}}>
        {loading?<Spinner/>:<Trash size={16}/> }
    </Button>
</>
  )
}

export default TodoTableActions