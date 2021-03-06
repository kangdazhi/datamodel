/// <reference path="gooobject.ts"/>


/**
 * A posteffect configuration 
 * (collection of posteffects, with options)
 */
interface posteffects extends GooObject {
	posteffects: {
		// Key is a generated string
		[key: string]: {
			sortValue: number;
			id: string;
			name: string
			type: string;
			options: {
				[optname: string]: any;
			}
			enabled: boolean;
		}
	}
}