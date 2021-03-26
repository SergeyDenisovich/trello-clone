import React from 'react';
import {AddNewItem} from './AddNewItem';
import {ColumnContainer, ColumnTitle} from './styles';
import {Card} from './Card';
import {useItemDrag} from './useItemDrag';
import { useDrop } from "react-dnd";
import {DragItem} from './DragItem';
import {useAppState} from './AppStateContext';

interface ColumnProps {
    id: string
    text: string
    index: number
}

export const Column = ({text, index, id}: ColumnProps) => {
    const {state, dispatch} = useAppState();
    const ref = React.useRef<HTMLDivElement>(null);

    const { drag } = useItemDrag({ type: "COLUMN", id, index, text });
    drag(ref);

    return(
        <ColumnContainer ref={ref}>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map((task) => (
                <Card text={task.text} key={task.id} index={index} />
            ))}
            <AddNewItem 
                toggleButtonText={"+ Add another task"} 
                onAdd={text => dispatch({type: "ADD_TASK", payload: {text, taskId: id}})} 
                dark 
            />
        </ColumnContainer>
    );
}