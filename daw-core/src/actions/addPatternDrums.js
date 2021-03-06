"use strict";

DAWCore.actions.set( "addPatternDrums", daw => {
	const patterns = daw.$getPatterns();
	const drumsId = DAWCore.actionsCommon.getNextIdOf( daw.$getDrums() );
	const patId = DAWCore.actionsCommon.getNextIdOf( patterns );
	const patName = DAWCore.actionsCommon.createUniqueName( daw.$getPatterns(), "drums" );
	const order = Object.values( patterns ).reduce( ( max, pat ) => {
		return pat.type !== "drums"
			? max
			: Math.max( max, pat.order );
	}, -1 ) + 1;
	const obj = {
		drums: { [ drumsId ]: {} },
		patterns: { [ patId ]: {
			order,
			type: "drums",
			name: patName,
			drums: drumsId,
			duration: daw.$getBeatsPerMeasure(),
		} },
		patternDrumsOpened: patId,
	};

	return [
		obj,
		[ "patterns", "addPattern", "drums", patName ],
	];
} );
