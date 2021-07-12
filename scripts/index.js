// setup guides
const holdingsList = document.querySelector('.holdings');

const setupHoldings = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const holding = doc.data();
      // using back tick is a template string so dynamic fields can be set using ${}
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${holding.name} </div>
          <div class="collapsible-body white"> ${holding.ticker} </div>
          <div class="collapsible-body white"> ${holding.wiki_addr} </div>
          <div class="collapsible-body white"> ${holding.sector} </div>
          <div class="collapsible-body white"> ${holding.industry} </div>
          <div class="collapsible-body white"> ${holding.pie} </div>
          <div class="collapsible-body white"> ${holding.qty} </div>
          <div class="collapsible-body white"> ${holding.av_price_gbp} </div>

        </li>
      `;
      html += li
    });
    holdingsList.innerHTML = html
  } else {
         holdingsList.innerHTML = '<h5 class="center-align">Login to see your portfolio</h5>'
  }


};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});