let mobShow = document.getElementById("show"),
	mobHide = document.getElementById("hide"),
	nav = document.getElementById("nav"),
	mobIcon = document.querySelectorAll("#mob-nav > img"),
	li = document.querySelectorAll("#nav > li"),
	landing = document.getElementById("landing"),
	news = document.getElementById("news"),
	lock = [landing, news];

// show & hide
mobIcon.forEach((e) => {
	e.addEventListener("click", () => {
		mobIcon.forEach((e) => e.classList.toggle("show"));
		mobIcon.forEach((e) => e.classList.toggle("hide"));
		showNav();
	});
});
function showNav() {
	mobHide.classList.contains("show")
		? nav.classList.toggle("hide")
		: nav.classList.add("hide");
}
// active class
li.forEach((ele) => {
	ele.addEventListener("click", () => {
		li.forEach((e) => e.classList.remove("active"));
		ele.classList.add("active");
	});
});

lock.forEach((e) => {
	e.onclick = () => {
		if (mobHide.classList.contains("show")) {
			mobHide.click();
		}
	};
});
