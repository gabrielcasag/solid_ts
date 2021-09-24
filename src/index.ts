import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";

const twitter = new ShareButtonTwitter(".btn-twitter", "https://youtube.com/rodrigobranas");
twitter.bind();

const facebook = new ShareButtonFacebook(".btn-facebook", "https://youtube.com/rodrigobranas");
facebook.bind();

const linkedin = new ShareButtonLinkedin(".btn-linkedin", "https://youtube.com/rodrigobranas");
linkedin.bind();