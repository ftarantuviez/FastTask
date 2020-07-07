import React from 'react';

export const TaskBanner = props => (
    <h4 className="bg-primary text-white text-center p-4">
        <i><strong> {props.property} </strong></i> Task App ({props.taskItems.filter(t => t.done === false).length} tasks left)
    </h4>
)