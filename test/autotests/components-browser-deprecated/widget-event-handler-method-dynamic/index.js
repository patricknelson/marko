module.exports = require('marko/components/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
		};
	},

	init: function() {
		this.fooClicked = false;
		this.barClicked = false;
	},

	handleFooClick: function() {
		this.fooClicked = true;
	},

	handleBarClick: function() {
		this.barClicked = true;
	}
});