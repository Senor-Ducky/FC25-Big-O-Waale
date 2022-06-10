"use strict";
//function for creating new channels to the daw window

DAWCore.actions.set( "addChannel", daw => {
	const channels = daw.$getChannels();
	const id = DAWCore.actionsCommon.getNextIdOf( channels );
	const order = DAWCore.actionsCommon.getNextOrderOf( channels );
	const name = `chan ${ id }`;
	const chanObj = DAWCore.json.channel( { order, name } );

	return [
		{ channels: { [ id ]: chanObj } },
		[ "channels", "addChannel", name ],
	];
} );
