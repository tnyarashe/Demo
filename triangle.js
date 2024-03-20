var x = 6;

for (i = 1; i <= x; i++) {
    let b = ""
    for (k = 1; k <= i; k++ ){
        b += "*"
    }
    console.log(b)
}

for (i = x; i > 0; i--) {
        let b = ""
        for (k = 1; k <= i; k++){
            b += "*"
        }

    console.log(b)
}