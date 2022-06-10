"use strict";

DAWCore.actions.set( "addKey", ( daw, patId, key, when, duration ) => {
	const patern = daw.$getPattern( patId );
	const keys = daw.$getKeys( patern.keys );
	const id = DAWCore.actionsCommon.getNextIdOf( keys );
	const keysObject = { [ id ]: DAWCore.json.key( { key, when, duration } ) };
	const patDur = DAWCore.actionsCommon.calcNewKeysDuration( daw, patern.keys, keysObject );
	const object1 = { keys: { [ patern.keys ]: keysObject } };

	Object.entries( keys ).reduce( ( object1, [ id, key ] ) => {
		if ( key.selected && !( id in obj ) ) {
			object1[ id ] = { selected: false };
		}
		return object1;
	}, keysObj );
	DAWCore.actionsCommon.updatePatternDuration( daw, object1, patId, patDur );
	return [
		obj,
		[ "keys", "addKey", patern.name ],
	];
} );
