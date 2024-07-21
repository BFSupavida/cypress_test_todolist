describe('todo list check', () => {
  it('check todo list', () => {
    cy.visit('https://todolist-1-baifern.vercel.app/')
    //add todo list
    cy.get('#root > div > form > input').type('HI');
    cy.get('#root > div > form > button').click();
    cy.get('#root > div > form > input').type('Cooking');
    cy.get('#root > div > form > button').click();
    cy.get('#root > div > form > input').type('Washing นั้นี้โน้น เยอะมาก ๆ 1120 อย่างสุด ๆ กินข้าว ๆ อร่อยมาก ๆ');
    cy.get('#root > div > form > button').click();
    //edit todo no.1
    cy.get('#root > div > div:nth-child(3) > div > svg.svg-inline--fa.fa-pen-to-square > path').click();
    //clear task no.1
    cy.get('#root > div > form:nth-child(3) > input').clear();
    //edit task todo no.1
    cy.get('#root > div > form:nth-child(3) > input').type('Cooking mai ka');
    //update edit task no.1
    cy.get('#root > div > form:nth-child(3) > button').click();
    //delete todo 2
    cy.get('#root > div > div:nth-child(4) > div > svg.svg-inline--fa.fa-trash > path').click();


  })
  // it('edit to do', () => {
  //   // cy.visit('https://todolist-1-baifern.vercel.app/')
  //   // cy.get('#root > div > form > input').type('HI');
  //   // cy.get('#root > div > form > button').click();
  //   // cy.get('#root > div > form > input').type('Cooking');
  //   // cy.get('#root > div > form > button').click();
  //   // cy.get('#root > div > form > input').type('Washing นั้นี้โน้น เยอะมาก ๆ 1120 อย่างสุด ๆ กินข้าว ๆ อร่อยมาก ๆ');
  //   // cy.get('#root > div > form > button').click();
  // })
})