import { ListItemText, ListItem, List, ListItemAvatar, Avatar,ImageIcon } from '@material-ui/core';
import React from 'react'
import './todo.css';
function todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
               <ListItemText primary={props.text} secondary="Dummy Deadline ⏰"/>  
            </ListItem>
            <li></li>
        </List>
    )
}

export default todo;
