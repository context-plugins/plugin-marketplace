import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceSchema, type Face } from "./face.js";

export type FaceMatch = {
  /** Confidence in the match of this face with the input face. */
  similarity?: number;
  face?: Face;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const faceMatchSchema: Schema<FaceMatch> = s.object<FaceMatch>(
  {
    similarity: s.optional(s.float64()),
    face: s.optional(s.lazy(() => faceSchema)),
    _keysMap: {
      similarity: "Similarity",
      face: "Face",
    },
  },
  { additionalProperties: s.json() },
);
