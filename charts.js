// Pie Chart

new Chart(document.getElementById("pieChart"),{

type:"pie",

data:{

labels:["Critical","High","Medium","Low"],

datasets:[{

data:[3,8,15,20]

}]

}

});

// Bar Chart

new Chart(document.getElementById("barChart"),{

type:"bar",

data:{

labels:["IAM","EC2","S3","VPC","CloudTrail"],

datasets:[{

label:"Findings",

data:[5,8,4,3,2]

}]

}

});