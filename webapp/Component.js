sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/airdit/Chatbot/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.airdit.Chatbot.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.renderRecastChatbot();
		},
		renderRecastChatbot: function () {
			if (!document.getElementById("cai-webchat")) {
				var s = document.createElement("script");
				s.setAttribute("id", "cai-webchat");
				s.setAttribute("src", "https://cdn.cai.tools.sap/webchat/webchat.js");
				document.body.appendChild(s);
			}
			s.setAttribute("channelId", "c91dcc76-b1a1-4f18-8651-231e236fa316");
			s.setAttribute("token", "1ddaedc136289de597a6a370d90cb5d0");
		},
	});
});