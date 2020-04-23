document.getElementById('comments').innerHTML = '<i class="comments-icon fas fa-comment-alt" data-tippy-content="Comments"></i><div class="inner"><div id="disqus_thread"></div><div></div></div>';
(function() { // DON'T EDIT BELOW THIS LINE
	var d = document, s = d.createElement('script');
	s.src = 'https://wolfhead.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();