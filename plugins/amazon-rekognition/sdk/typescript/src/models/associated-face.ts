import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssociatedFace = {
  /** Unique identifier assigned to the face. */
  faceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associatedFaceSchema: Schema<AssociatedFace> = s.object<AssociatedFace>(
  {
    faceId: s.optional(s.string()),
    _keysMap: {
      faceId: "FaceId",
    },
  },
  { additionalProperties: s.json() },
);
