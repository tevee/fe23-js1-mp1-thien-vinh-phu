// första sektionen med rad 1 till 5
let firstWrapper = document.createElement("div");
document.body.append(firstWrapper);
firstWrapper.style.textAlign = "center";

let radArr = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
for (let i = 0; i < radArr.length; i++) {
  let h2 = document.createElement("h2");
  firstWrapper.appendChild(h2);
  h2.innerText = `${radArr[i]}`;
  h2.style.cssText = `
    background-color: hsl(${120 + 24 * i}, 50%, 80%);
    color: hsl(240,100%,75%);
    font-size: ${8 * i + 12}px;
    margin: 0 0 ${6 * i + 12}px;
    `;
}

// andra sektionen med tre kolumner
let secondWrapper = document.createElement("div");
document.body.append(secondWrapper);
secondWrapper.style.cssText = `
width: 100%;
display: flex;
justify-content: space-around;
border: 1px solid black;
`;

let columns = ["firstUl", "secondUl", "thirdUl"];
let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let stringArr = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

// skapa 3 kolumner och visa i DOM:en
for (let i = 0; i < columns.length; i++) {
  columns[i] = document.createElement("ul");
  columns[i].style.cssText = `
    list-style-type: none;
    width: 2.5%;
    display: flex;
    flex-direction: column;
    border: 8px solid hsl(240,100%,90%);
    padding: 0;
    margin: 3rem 0;
    `;

  //  skapa 10 listor och visa i DOM:en
  for (let j = 0; j < numArr.length; j++) {
    let li = document.createElement("li");

    if (i === 0) {
      li.innerText = numArr[j];
      if (j % 2 == 0) {
        li.style.backgroundColor = "black";
        li.style.color = "white";
      }

      if (j === 4) {
        li.style.backgroundColor = "hsl(240,100%,90%)";
      }
      columns[i].appendChild(li);
    } else if (i === 1) {
      li.innerText = numArr[j];
      li.style.textAlign = "center";
      columns[i].style.flexDirection = "column-reverse";

      // samma modulus som kolumn 1 för denna ul har column-reverse
      if (j % 2 == 0) {
        li.style.backgroundColor = "black";
        li.style.color = "white";
      }
      if (j === 8) {
        li.style.backgroundColor = "hsl(240,100%,90%)";
      }
      columns[i].appendChild(li);
    } else if (i === 2) {
      li.innerText = stringArr[j];
      li.style.textAlign = "end";

      if (j % 2 == 0) {
        li.style.backgroundColor = "black";
        li.style.color = "white";
      }
      if (j === 5) {
        li.style.backgroundColor = "hsl(240,100%,90%)";
      }
      columns[i].appendChild(li);
    }
  }
  secondWrapper.appendChild(columns[i]);
}

console.log("github desktop");
