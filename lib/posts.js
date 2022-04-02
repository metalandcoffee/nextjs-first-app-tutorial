

// Get posts from WordPress API.
export async function getSortedPostsData() {
	const res = await fetch(`https://metalandcoffee.com/wp-json/wp/v2/posts`);
	return res.json();
}

export async function getAllPostIds() {
	const posts = await getSortedPostsData();
	return posts.map(post => {
		return {
			params: {
				id: String(post.id)
			}
		}
	})
}

export async function getPostData(id) {
	const res = await fetch(`https://metalandcoffee.com/wp-json/wp/v2/posts/${id}`);
	const post = await res.json();
	return post;
}