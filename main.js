var size = 120,
    newsContent= $('.review-item-1-text'),
    newsText = newsContent.text();
    
if(newsText.length > size){
	newsContent.text(newsText.slice(0, size) + ' ...');
}