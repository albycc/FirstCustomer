const ModalWindow = (person) => {
  const { data, support } = person;
  return `
    <div class="modal-background">
      <div class="modal-window">
        <div class="modal-header">
          <button id="close-modal-button"">X</button>
        </div>
        <div class="modal-personinfo">
          <img src="${data.avatar}" />
          <div class="personinfo-text">
            <p>${data.first_name} ${person.data.last_name}</p>
            <a href="mailto:${data.email}">${data.email}</a>
          
          </div> 
            
        </div>
        <div class="modal-contribute">
          <p>${support.text}</p>
          <a href="${support.url}" target="_blank" class="link-button">Contribute</a>
        
        </div>
      </div>

    
    </div>
  `;
};

export default ModalWindow;
