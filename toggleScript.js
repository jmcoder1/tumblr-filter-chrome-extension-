chrome.storage.sync.get({

    first_choice: false,
    second_choice: false,
    third_choice: false,
            
    text: false,
    image: false,
    quote: false,
    link: false,
    chat: false,
    audio: false,
    video: false,
    ask: false
}, function(items){

console.log(items.text);
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    
   	// Text Post
   	if(items.text == true){
    	$("[class*='post_full is_regular']").hide();
    }
    else{
    	$("[class*='post_full is_regular']").show();
    }

    // Photo Posts
    if(items.image == true){
    	$("[class*='post_full is_photo']").hide();
    }
    else{
    	$("[class*='post_full is_photo']").show();
    }

    // Quote Posts
    if(items.quote == true){
    	$("[class*='post_full is_quote']").hide();
    }
    else{
    	$("[class*='post_full is_quote']").show();
    }

    // Link Posts
    if(items.link == true){
    	$("[class*='post_full is_link']").hide();
    }
    else{
    	$("[class*='post_full is_link']").show();
    }

    // Chat Posts
    if(items.chat == true){
    	$("[class*='post_full is_conversation']").hide();
    }
    else{
    	$("[class*='post_full is_conversation']").show();
    }

    // Audio Posts
    if(items.audio == true){
    	$("[class*='post_full is_audio']").hide();
    }
    else{
    	$("[class*='post_full is_audio']").show();
    }


    // Video Posts
    if(items.video == true){
    	$("[class*='post_full is_video']").hide();
    }
    else{
    	$("[class*='post_full is_video']").show();
    }

    // Ask Posts
    if(items.ask == true){
    	$("[class*='post_full is_note']").hide();
    }
    else{
    	$("[class*='post_full is_note']").show();
    }

    
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});


});