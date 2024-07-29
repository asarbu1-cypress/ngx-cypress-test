export class StepperPage {
  StepperPage() {
    cy.get(".sidebar-toggle").click();
    cy.contains("Layout").click();

    //Stepper page check

    //Stepper 1
    cy.contains("Stepper").click();
    cy.url().should("include", "/stepper");
    cy.get('[class="col-md-12 col-lg-12 col-xxxl-12"]').should(
      "contain",
      "Step content #1"
    );
    cy.get('[class="step-content"]').contains("next").click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 1);
    cy.get('[class="step-content"]').contains("next").click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 2);
    cy.get('[class="step-content"]').contains("next").click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 3);
    cy.get('[class="step-content"]').contains("prev").click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 4);
    cy.get('[class="step-content"]').contains("prev").click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 3);
    cy.get('[class="step-content"]').contains("prev").click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 2);

    //Stepper 2
    cy.contains(
      "Lorizzle ipsum dolizzle stuff fizzle, consectetuer adipiscing break it down. Nullizzle sapien velizzle, my shizz pimpin', shizzle my nizzle crocodizzle shut the shizzle up, gravida vizzle, dang."
    ).should("exist");
    cy.get('[class="input-group"]').type("Andrei");
    cy.contains("nb-card-body", "Lorizzle ipsum dolizzle stuff fizzle")
      .contains("next")
      .click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 1);
    cy.contains(
      "Pellentesque we gonna chung tortor. Sizzle pizzle. Fizzle izzle dolor dapibus fo shizzle mah nizzle fo rizzle, mah home g-dizzle tempus tempor. Maurizzle cool nibh owned turpizzle. My shizz fo shizzle tortor."
    ).should("exist");
    cy.get('[class="form-control ng-untouched ng-pristine ng-invalid"]').type(
      "Fight Club"
    );
    cy.contains("nb-card-body", "Pellentesque we gonna chung tortor")
      .contains("next")
      .click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 2);
    cy.contains(
      "Things boom shackalack rhoncus yo. In fo shizzle my nizzle gangsta platea dictumst. Check it out pot."
    ).should("exist");
    cy.get('[class="form-control ng-untouched ng-pristine ng-invalid"]').type(
      "Something"
    );
    cy.contains("nb-card-body", "Things boom shackalack rhoncus yo")
      .contains("Confirm")
      .click();
    cy.contains("Wizard completed!").should("exist");
    cy.get('[class="step-container ng-star-inserted"]')
      .find(
        '[class="appearance-filled size-medium status-primary shape-rectangle transitions"]'
      )
      .click();
    cy.contains(
      "Lorizzle ipsum dolizzle stuff fizzle, consectetuer adipiscing break it down. Nullizzle sapien velizzle, my shizz pimpin', shizzle my nizzle crocodizzle shut the shizzle up, gravida vizzle, dang."
    ).should("exist");

    //Stepper 3
    cy.get('[class="size-medium"]').should("contain", "Step content #1");
    cy.contains(
      "Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis, commodo vel placerat quis, lobortis in ligula."
    ).should("exist");
    cy.get('[class="size-medium"]')
      .find(
        '[class="appearance-filled size-medium status-primary shape-rectangle ng-star-inserted transitions"]'
      )
      .click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 1);
    cy.get('[class="size-medium"]').should("contain", "Step content #2");
    cy.contains(
      "Curabitur luctus mattis risus nec condimentum. Donec at dui turpis. Sed vehicula fringilla rutrum. Nullam sed ornare magna. Mauris vitae laoreet diam. Mauris fermentum ligula at lacinia semper. Nulla placerat dui eu sapien pellentesque, eu placerat leo luctus. Cras pharetra blandit fermentum."
    ).should("exist");
    cy.get('[class="size-medium"]').find('[type="submit"]').click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 2);
    cy.get('[class="size-medium"]').should("contain", "Step content #3");
    cy.contains(
      "Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis, commodo vel placerat quis, lobortis in ligula. Curabitur luctus mattis risus nec condimentum. Donec at dui turpis. Sed vehicula fringilla rutrum. Nullam sed ornare magna. Mauris vitae laoreet diam. Mauris fermentum ligula at lacinia semper. Nulla placerat dui eu sapien pellentesque, eu placerat leo luctus. Cras pharetra blandit fermentum."
    ).should("exist");
    cy.get('[class="size-medium"]').find('[type="submit"]').click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 3);
    cy.get('[class="size-medium"]').should("contain", "Step content #4");
    cy.contains(
      "Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex."
    ).should("exist");
    cy.get('[class="size-medium"]').find('[type="button"]').click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 4);
    cy.get('[class="size-medium"]').find('[type="button"]').click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 3);
    cy.get('[class="size-medium"]').find('[type="button"]').click();
    cy.get('[class="step ng-star-inserted completed"]').should("not.be", 3);
  }
}

export const stepperPage = new StepperPage();
