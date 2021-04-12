const API_URL = 'https://dev.alpha-centauri.gravity.opsserver.ch/gravity/services/common_config/admin_site';

document.addEventListener('DOMContentLoaded', function() {
    fetch(API_URL)
    .then(response => console.log(response.json()))
});