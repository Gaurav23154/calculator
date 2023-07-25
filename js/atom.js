
function mydata(v) {
    var txtInput = document.getElementById('txtInput');
    var oldvalue = txtInput.value;
    var t = oldvalue.length;
    var lastchar = oldvalue[t - 1];
    var oprSym = ["+", "-", "*", "/", "."];
    if (oprSym.includes(v)) {
        if (oprSym.includes(lastchar)) {
            var removeLast = oldvalue.slice(0, -1);
            txtInput.value = removeLast + v;
        }
        else {
            txtInput.value = oldvalue + v;
        }
    }
    else {
        txtInput.value = oldvalue + v;
    }
}
function calData() {
    var txtInput = document.getElementById('txtInput');
    var oldvalue = eval(txtInput.value);
    txtInput.value = oldvalue;
}
function clsData() {
    document.getElementById('txtInput').value = '';
}

