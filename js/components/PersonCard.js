const PersonCard = (person) => {
  return `
    <div class="person-card" id="${person.id}">
      <img src=${person.avatar} />
      <div>
        <p class="person-name">${person.first_name} ${person.last_name}</p>
        <p>${person.email}</>
      </div>
    
    </div>
    `;
};

export default PersonCard;
