import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteFacesRequest = {
  /** Collection from which to remove the specific faces. */
  collectionId: string;
  /** An array of face IDs to delete. */
  faceIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteFacesRequestSchema: Schema<DeleteFacesRequest> = s.object<DeleteFacesRequest>(
  {
    collectionId: s.string(),
    faceIds: s.array(s.string()),
    _keysMap: {
      collectionId: "CollectionId",
      faceIds: "FaceIds",
    },
  },
  { additionalProperties: s.json() },
);
