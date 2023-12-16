// Redirect script
var path = window.location.pathname;

// Define the mapping of post URLs to sorry page URLs
var redirectMap = {
  '/p/kgf-1.html': 'https://codestore360.blogspot.com/p/sorry.html?title=Tool+Tutorial&amp;reason=html-problems&amp;m=1',
  '/p/kgf-2.html': 'https://codestore360.blogspot.com/p/sorry.html?title=Tool+Tutorial&amp;reason=dmca-problems&amp;m=1',
  // Add more mappings as needed for the other posts
  // '/p/your-post.html': 'https://codestore360.blogspot.com/p/sorry.html?title=Your+Title&amp;reason=Your+Reason&amp;m=1',
};

// Check if the current post URL is in the redirectMap
if (redirectMap.hasOwnProperty(path)) {
  window.location.href = redirectMap[path];
}
