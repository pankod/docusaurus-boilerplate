/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
	{
		caption: 'User1',
		// You will need to prepend the image path with your baseUrl
		// if it is not '/', like: '/test-site/img/image.jpg'.
		image: '/img/undraw_open_source.svg',
		infoLink: 'https://www.facebook.com',
		pinned: true,
	},
];

const organizationName = "Pankod Inc.";
const projectName = "React Native Project";
const packageName = "react-native-picker-modal-view";
const url = [
	{
		title: "Facebook",
		url: ""
	},
	{
		title: "Instagram",
		url: ""
	},
	{
		title: "Twitter",
		url: ""
	}
]

const siteConfig = {
	title: 'Pankod', // Title for your website.
	tagline: 'Open Source Documentation',
	url: 'https://www.pankod.com', // Your website URL
	baseUrl: '/', // Base URL for your project */
	// For github.io type URLs, you would set the url and baseUrl like:
	//   url: 'https://facebook.github.io',
	//   baseUrl: '/test-site/',

	socialMediaUrl: url,
	packageName: packageName,

	// Used for publishing and more
	projectName: projectName,
	organizationName: organizationName,
	// For top-level user or org sites, the organization is still the same.
	// e.g., for the https://JoelMarcey.github.io site, it would be set like...
	//   organizationName: 'JoelMarcey'

	// For no header links in the top nav bar -> headerLinks: [],
	headerLinks: [
		{ doc: 'doc1', label: 'Docs' },
		{ doc: 'doc4', label: 'API' },
		{ page: 'help', label: 'Help' },
		{ blog: true, label: 'Blog' },
		{ href: 'https://github.com/pankod/' + packageName, label: 'Github' },
		{ search: true },
		{ languages: true }
	],

	// If you have users set above, you add it here:
	users,

	/* path to images for header/footer */
	headerIcon: 'img/footer_icon.png',
	footerIcon: 'img/footer_icon.png',
	favicon: 'img/favicon.png',

	/* Colors for website */
	colors: {
		primaryColor: '#2C3E50',
		secondaryColor: '#83878D',
	},

	/* Custom fonts for website */
	/*
	fonts: {
	  myFont: [
		"Times New Roman",
		"Serif"
	  ],
	  myOtherFont: [
		"-apple-system",
		"system-ui"
	  ]
	},
	*/

	// This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
	copyright: `Copyright © ${new Date().getFullYear()} ${organizationName}`,

	highlight: {
		// Highlight.js theme to use for syntax highlighting in code blocks.
		theme: 'default',
	},

	// Add custom scripts here that would be placed in <script> tags.
	scripts: ['https://buttons.github.io/buttons.js'],

	// On page navigation for the current documentation page.
	onPageNav: 'separate',
	// No .html extensions for paths.
	cleanUrl: true,

	// Open Graph and Twitter card images.
	// Google Analytics id
	gaTrackingId: "",

	// Facebook settings
	facebookAppId: "",
	facebookPixelId: "",
	facebookComments: false,

	// Twitter settings
	twitter: "",
	ogImage: 'img/undraw_online.svg',
	twitterImage: 'img/undraw_tweetstorm.svg',

	// Show documentation's last contributor's name.
	// enableUpdateBy: true,

	// Show documentation's last update time.
	// enableUpdateTime: true,

	// You may provide arbitrary config keys to be used as needed by your
	// template. For example, if you need your repo's URL...
	repoUrl: "https://github.com/pankod/" + packageName,

	// Custom css
	separateCss: []
};

module.exports = siteConfig;
