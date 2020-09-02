const countries = [
   {
      name: 'USA',
   },
   {
      name: 'United State',
   },
   {
      name: 'India',
   },
   {
      name: 'Cancun',
   },
   {
      name: 'Argentina',
   },
   {
      name: 'Boston',
   },
   {
      name: 'Virginia',
   },
   {
      name: 'Nigeria',
   },
   {
      name: 'Togo',
   },
   {
      name: 'Canada',
   },
   {
      name: 'Mexico',
   },
   {
      name: 'South Africa',
   },
   {
      name: 'Korea',
   },
   {
      name: 'New York',
   },
];

const searchInput = document.querySelector('.input');
const autocompletePanel = document.querySelector('.autocomplete');

searchInput.addEventListener('keyup', function () {
   const searchText = searchInput.value;

   autocompletePanel.innerHTML = '';

   const suggestions = countries.filter((country) => {
      return country.name.toLowerCase().startsWith(searchText);
   });

   suggestions.forEach((suggested) => {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = suggested.name;

      autocompletePanel.appendChild(newDiv);
   });

   if (searchText === '') {
      autocompletePanel.innerHTML = '';
   }
});
