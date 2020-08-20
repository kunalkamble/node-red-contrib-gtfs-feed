const GtfsRealtimeBindings = require("gtfs-realtime-bindings");

module.exports = function (RED) {
	function GtfsRealtimeNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;

		this.on('input', function(msg) {
			msg.payload = GtfsRealtimeBindings.FeedMessage.decode(msg.payload);
			node.send(msg);
		});
	}

	RED.nodes.registerType("gtfs-feed", GtfsRealtimeNode);
}