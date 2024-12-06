function calculateSize() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const chest = document.getElementById('chest').value;
    const waist = document.getElementById('waist').value;
    const legLength = document.getElementById('legLength').value;

    let shirtSize = "";
    let pantsSize = "";

    // Xác định size áo
    if (chest >= 92 && chest <= 100 && height >= 160 && height <= 167 && weight >= 50 && weight <= 60) {
        shirtSize = "S";
    } else if (chest >= 96 && chest <= 104 && height >= 163 && height <= 170 && weight >= 55 && weight <= 65) {
        shirtSize = "M";
    } else if (chest >= 100 && chest <= 108 && height >= 165 && height <= 172 && weight >= 65 && weight <= 75) {
        shirtSize = "L";
    } else if (chest >= 104 && chest <= 112 && height >= 170 && height <= 180 && weight >= 75 && weight <= 90) {
        shirtSize = "XL";
    } else if (chest >= 106 && chest <= 114 && height >= 170 && height <= 190 && weight >= 85 && weight <= 100) {
        shirtSize = "XLL";
    } else {
        shirtSize = "Không xác định (hãy kiểm tra lại số đo)";
    }

    // Xác định size quần
    if (waist >= 68 && waist <= 72 && legLength <= 82) {
        pantsSize = "S (26-28)";
    } else if (waist >= 74 && waist <= 78 && legLength <= 83)
