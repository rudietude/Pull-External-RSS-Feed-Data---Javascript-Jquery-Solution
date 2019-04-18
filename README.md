# Pull-External-RSS-Feed-Data---Javascript-Jquery-Solution
Leverage the rss2json API to avoid cross origin header response errors. Sends a request to rss2json.com, which converts XML to JSON using PHP allow the script to display any of the RSS feed Data. 

# Steps to customize 

1.Change the url variable to pull data from an external rss source. This example uses https://solace.com/feed/ .  

2.Insert the script and copy the following HTML anywhere into your template to see the code in action. Data loads into the html element with an id="recentSolaceBlogPosts". 

  &lt;ol id="recentSolaceBlogPosts">&lt;/ol> 
  
  
3.For HTML id customization. (No 2 ID's can be the same on a page). Update line 28 and ensure the element you wish to load the RSS data has an id= to the updated value. Example: 

 &lt;ol id="new_name">&lt;/ol> 

**Note: You do not need all of the files. 
The HTML file is for reference showing the inclusion of Jquery, with the script embedded, and the HTML loaded. 
Optional .js file for customization.
Optional .min.js supplied for speed testing.
