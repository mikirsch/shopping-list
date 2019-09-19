'use strict';
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
});
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  let val = $(this).find('#shopping-list-entry').val();
  if (val === '') return false; //null input, don't do anything
  $(this).find('#shopping-list-entry').val(''); //clear input textbox
  let html = `<li>
  <span class="shopping-item">${val}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
      </button>
  </div>
</li>`;
  $('.shopping-list').append(html); //don't
});