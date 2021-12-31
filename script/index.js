function putData(data) {
    let tableBody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    let nPositif = 0;
    let nSembuh = 0;
    let nMeninggal = 0;
    data.forEach(function(item, index) {
        let row = tableBody.insertRow(index);
        row.insertCell(0).innerHTML = item["nama"];
        row.insertCell(1).innerHTML = item["positif"];
        row.insertCell(2).innerHTML = item["sembuh"];
        row.insertCell(3).innerHTML = item["meninggal"];

        nPositif += item["positif"];
        nSembuh += item["sembuh"];
        nMeninggal += item["meninggal"];
    });

    document.getElementById('nPositif').innerHTML = nPositif;
    document.getElementById('nSembuh').innerHTML = nSembuh;
    document.getElementById('nMeninggal').innerHTML = nMeninggal;
}

function fetchData() {
    const url = 'https://dummy-cov.herokuapp.com/provinsi';
    fetch(url)
        .then(response => response.json())
        .then(myJson => putData(myJson));
}

document.body.onload = fetchData;