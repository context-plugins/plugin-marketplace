import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FaceSearchSettings = {
  /** The ID of a collection that contains faces that you want to search for. */
  collectionId?: string;
  /**
   * Minimum face match confidence score that must be met to return a result for a recognized face.
   * The default is 80. 0 is the lowest confidence. 100 is the highest confidence. Values between 0
   * and 100 are accepted, and values lower than 80 are set to 80.
   */
  faceMatchThreshold?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const faceSearchSettingsSchema: Schema<FaceSearchSettings> = s.object<FaceSearchSettings>(
  {
    collectionId: s.optional(s.string()),
    faceMatchThreshold: s.optional(s.float64()),
    _keysMap: {
      collectionId: "CollectionId",
      faceMatchThreshold: "FaceMatchThreshold",
    },
  },
  { additionalProperties: s.json() },
);
