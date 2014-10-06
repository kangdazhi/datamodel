/// <reference path="gooobject.ts"/>
/// <reference path="entity.ts"/>

enum CanvasSizingMode {
	Stretch,
	Resolution,
	AspectRatio
};


// REVIEW: use an enum, see above

/**
 * Matches types with one of 2d or 3d
 * (case sensitive, must be lowercase)
 *
 * @type string
 * @pattern (2d|3d)
 */
interface SceneType {}

/**
 * A scene in create (what was previously called a project)
 */
interface scene extends GooObject {

	type?: SceneType;

	tags?: {
	    [tagName: string]: string;
	}

	/**
	* All references not in scene.entities
	*/
	assets?: {
		[listId: string]: {
			sortValue: number;
			assetRef: string;
		}
	}

	// Contains the stable url for the latest published project.
	publishedUrl?: URI;

	/**
	*	A set with published URI with it's date of publish.
	*/
	publishedUrls?: {
		[URI: string]: DateTime

	}

	/**
	 * _Root_ entities that are present in the scene
	 */
	entities: {
		// listId is enities' id
		[listId: string]: {
			entityRef: EntityRef;
			sortValue: number;
		}
	}
	initialCameraRef: EntityRef;

	posteffectsRef?: PosteffectsRef;

	environmentRef?: EnvironmentRef;

	canvas?: {
		mode?: CanvasSizingMode;
		resolution?: {
			width: number;
			height: number;
		}
		aspect?: {
			width: number;
			height: number;
		}
	}

	timeline?: TimelineComponent;
}
