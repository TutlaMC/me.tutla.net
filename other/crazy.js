document.addEventListener("DOMContentLoaded", function () {
    var prev = null;
    var index = 0;
    var children = document.getElementById("tutlamc-header-loop-text-items").children;

    function loopWithDelay() {
        if (index >= children.length) {
            index = 0;
        }

        let child = children[index];
        child.style.display = "block";
        if (prev != null) {
            prev.style.display = "none";
        }
        prev = child;
        console.log(child.innerHTML);
        console.log(prev.innerHTML);

        index++;

        setTimeout(loopWithDelay, 1000); // Adjust the wait time as needed
    }

    loopWithDelay();
});
