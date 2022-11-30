const fs = require('fs');
let FileMap = "";

function readdir(dir) {
    let tree= {}
    let files = fs.readdirSync(dir);
    files.forEach(file => {
        if (fs.statSync(dir + file).isDirectory()) {
            tree[file] = readdir(dir + file + '/');
        } else {
            console.log(file);
            tree[file] = `<a href="./${dir + file}">${dir + file}</a>`;
        };
    });
    return tree
}
let tree = readdir('./code/');

let temp;
function dfs(tree) {
    for (let key in tree) {
        if (typeof tree[key] === 'object') {
            temp += `<li>${key}</li><ul>`;
            dfs(tree[key]);
            temp += '</ul>';
        } else {
            temp += `<li>${tree[key]}</li>`;
        }
    }
}
dfs(tree);

let template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<pre>
  ${temp}
  </pre>
</body>
</html>
`

fs.writeFile('index.html', template, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}
);
