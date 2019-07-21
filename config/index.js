module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Software Engineering Blog by Vaibhav Gharge', // Navigation and Site Title
  siteTitleAlt: 'Software Engineering Blog', // Alternative Site title for SEO
  siteTitleManifest: 'SoftwareEngineeringBlog',
  siteUrl: 'https://vaibhavgharge.com/blog-posts', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Writing and publishing content', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Software Engineering Blog by Vaibhav Gharge.', // Your site description
  author: 'Vaibhav Gharge', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@VaibSGharge', // Twitter Username - Optional
  ogSiteName: 'VaibSGharge', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-6',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
}
