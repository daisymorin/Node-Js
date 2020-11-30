console.log('coucou');
const $inputSearch = $('#input-search');

$(document).on('click', '#button-search', () => {
    console.log('button click');
});

$(document).on('keyup', '#input-search', () => {
  const $searchValue = $inputSearch.val();

  $.get('/products?search=' + $searchValue, (products) => {
    
    const $templateHtml = $('#template-products').html();
    //console.log($templateHtml);
    
    // compile the template
    const template = Handlebars.compile($templateHtml);
   
    // execute the compiled template and print the output to the console
    const $renderHtml = template({ products});
    $('#table-body').html($renderHtml);
  })
});

