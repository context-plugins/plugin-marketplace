import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { comparedFaceSchema, type ComparedFace } from "./compared-face.js";

export type CompareFacesMatch = {
  /** Level of confidence that the faces match. */
  similarity?: number;
  face?: ComparedFace;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compareFacesMatchSchema: Schema<CompareFacesMatch> = s.object<CompareFacesMatch>(
  {
    similarity: s.optional(s.float64()),
    face: s.optional(s.lazy(() => comparedFaceSchema)),
    _keysMap: {
      similarity: "Similarity",
      face: "Face",
    },
  },
  { additionalProperties: s.json() },
);
