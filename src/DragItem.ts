import React from 'react';

export type ColumnDragItem = {
    index: number
    id: string
    text: string
    type: "COLUMN"
}

export type DragItem = ColumnDragItem;