//generates manager cards
const generateManager = (employeeArr) => {
  return `
  <div class="card m-3 shadow" style="width: 14rem">
  <div class="card-header bg-info text-light">
  ${employeeArr
    .filter(({ phone }) => phone)
    .map(({ name, email, id, phone }) => {
      return `
      <h4>${name}</h4>
      <h5>Placeholder</h5>

    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Phone ${phone}</li>
    </ul>
    </div>
      `;
    })
    .join("")}
  `;
};

// geneates engineer cards
const generateEngineer = (employeeArr) => {
  return `
    <div class="card m-3 shadow" style="width: 14rem">
    <div class="card-header bg-info text-light">
    ${employeeArr
      .filter(({ github }) => github)
      .map(({ name, email, id, github }) => {
        return `
        <h4>${name}</h4>
        <h5>Placeholder</h5>
  
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Github: http://githbu.com/${github}</li>
      </ul>
      </div>
        `;
      })
      .join("")}
    `;
};

// generaets intern cards
const generateIntern = (employeeArr) => {
  return `
      <div class="card m-3 shadow" style="width: 14rem">
      <div class="card-header bg-info text-light">
      ${employeeArr
        .filter(({ school }) => school)
        .map(({ name, email, id, school }) => {
          return `
          <h4>${name}</h4>
          <h5>Placeholder</h5>
    
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
        </div>
          `;
        })
        .join("")}
      `;
};

module.exports = (templateData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Employees</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
         name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <!-- Bootstrap CSS -->
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
        />
    </head>
    <body>
        <header class="col-12 bg-danger">
            <h1 class="text-light text-center py-3 mb-3">My Team</h1>
        </header>
        <section class="row justify-content-center">
            ${generateManager(templateData)}
            ${generateEngineer(templateData)}
            ${generateIntern(templateData)}
        </section>
        <!-- scripts -->
        <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
        ></script>
        <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
        ></script>
        <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
        ></script>
    </body>
</html>

    `;
};
