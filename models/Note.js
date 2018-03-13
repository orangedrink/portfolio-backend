var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Note Model
 * ==========
 */

var Note = new keystone.List('Note', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Note.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	//image: { type: Types.CloudinaryImage },
	content: { type: Types.Html, wysiwyg: true, height: 400 },
	category: { type: Types.Select, options: 'about, portfolio, games' },
});

Note.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Note.register();
