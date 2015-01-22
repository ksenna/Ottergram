var otterData = [
	{
		img: 'img/otter1.jpg',
		title: 'lol-otter'
	},
	{
		img: 'img/otter2.jpg',
		title: 'gangnam otter'
	},
	{
		img: 'img/otter3.jpg',
		title: 'your otterness'
	},
	{
		img: 'img/otter4.jpg',
		title: 'mother and otter'
	},
	{
		img: 'img/otter5.jpg',
		title: 'sleepy otters'
	},
	{
		img: 'img/otter6.jpg',
		title: 'jabba the otter'
	}
];

var bigImage = document.querySelector('#bigImage');
var links = document.querySelectorAll('a');
links = [].slice.call(links);

var hideDetail = function () {
	console.log('Hiding...');
	document.body.classList.add('hide-detail');
	bigImage.removeEventListener('click', hideDetail);
}

var showImage = function (url) {
	bigImage.setAttribute('src', url);
	document.body.classList.remove('hide-detail');
	bigImage.addEventListener('click', hideDetail);
	links.forEach(function (link) {
		link.classList.remove('active');
	});
}

var handleClick = function (event) {
	event.preventDefault();
	var imageUrl = this.getAttribute('href');
	console.log(imageUrl);
	showImage(imageUrl);
	links.forEach(function (link) {
		link.classList.remove('active');
	});
	this.classList.add('active');
}

links.forEach(function (link) {
	// console.log(link);
	link.addEventListener('click', handleClick);
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
 	hideDetail();
 }
 console.log(event.keyCode);
});
