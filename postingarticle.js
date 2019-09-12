<html>
<head><title>blockchain-js posting example</title></head>
<script src="https://cdn.blockchainjs.com/lib/latest/blockchain.min.js"></script>
<script language="JavaScript">
function postArticle()
{
  blockchain.broadcast.comment(
    document.getElementById('postingKey').value, // posting wif
    '', // author, leave blank for new post
    'blockchaintest', // first tag
    document.getElementById('username').value, // username
    'name-of-my-test-article-post', // permlink
    document.getElementById('title').value, // Title
    document.getElementById('article').value, // Body of post
    // json metadata (additional tags, app name, etc)
    { tags: ['secondtag'], app: 'blockchainjs-test!' },
    function (err, result) {
      if (err)
        alert('Failure! ' + err);
      else
        alert('Success!');
    }
  );
}
</script>
<body>
<h2>Post an article to the blockchain blockchain!</h2>
Username: <input id="username" type="text"><br/>
Posting key: <input id="postingKey" type="password" size="85"><br/>
Title of article: <input id="title" type="text"><br/>
Article text:<br/>
<textarea id="article"></textarea><br/>
<input id="postIt" type="button" value="Post it!" onClick=postArticle()>
</body>
</html>