describe('Percy Visual Test', () => {
   it('should take a Percy snapshot', () => { 
    cy.visit('http://localhost:5173'); // Ensure your React app is running 
    cy.percySnapshot('Homepage Snapshot'); 
  }); 
});