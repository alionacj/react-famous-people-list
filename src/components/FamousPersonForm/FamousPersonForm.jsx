import React, { useState, useEffect } from 'react';

function FamousPersonForm(params) {
    
    return (
        <form onSubmit={params.addPerson}>
        <label htmlFor="name-input">Name:</label>
        <input
          id="name-input"
          value={params.famousPersonName}
          onChange={e => params.setPersonName(e.target.value)}
        />
        <label htmlFor="role-input">Famous for:</label>
        <input
          id="role-input"
          value={params.famousPersonRole}
          onChange={e => params.setPersonRole(e.target.value)}
        />
        <button type="submit">Done</button>
      </form>
    )
}

export default FamousPersonForm
