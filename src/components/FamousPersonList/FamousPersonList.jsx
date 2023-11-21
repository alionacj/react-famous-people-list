import React, { useState, useEffect } from 'react';

function FamousPersonList({famousPeopleArray}) {

    return (
        <ul>
            {
            famousPeopleArray.map((person) => {
                return <li key={person.id}>{person.name} is famous for "{person.role}"</li>
            })
            }
      </ul>
    )
}

export default FamousPersonList
