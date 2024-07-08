const insert = document.querySelector('.insert');
window.addEventListener('keydown', function(e) {
    insert.innerHTML = `
    <div class = 'insert'>
        <table class = 'table'>
            <tr>
                <th>Key</th>
                <th>keyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <th>${e.key === ' ' ? "Space" : e.key}</th>
                <th>${e.keyCode}</th>
                <th>${e.code}</th>
            </tr>
        </table>
    </div>
    `
})