//Solace Blog RSS Feed URL
var url= 'https://solace.com/feed/';

//GET AJAX Reguest using rss2json api
$.ajax({
  type: 'GET',
  url: "https://api.rss2json.com/v1/api.json?rss_url=" + url,
  dataType: 'jsonp',
  success: function(solaceBlogRSSData) {
	
	//console.log(solaceBlogRSSData.feed.description);    
	//console.log(solaceBlogRSSData);
	//console.log(solaceBlogRSSData.items);
	
	var solaceRSSFeedBlogPostData = solaceBlogRSSData.items;
	var indexOfSolaceRSSFeed = 0;
	
	solaceRSSFeedBlogPostData.forEach(function(entry) {
		indexOfSolaceRSSFeed++;
		
		//console.log(indexOfSolaceRSSFeed);
		//console.log(entry);
		
		if(indexOfSolaceRSSFeed <= 5){
		
			console.log(entry.title);
			console.log(entry.link);
			$("#recentSolaceBlogPosts").append("<li><a title='Open the "+entry.title+" blog post in a new window' href='"+entry.link+"' target='_blank'>"+entry.title+"</a></li>");
		}
	});
  }
});