
if (!localStorage.getItem("initialized")) {
    localStorage.setItem("cartProducts", JSON.stringify([]));
    localStorage.setItem("whishlistProducts", JSON.stringify([]));
    localStorage.setItem("initialized", "true");
}
