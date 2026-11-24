import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";

export type ComparedSourceImageFace = {
  boundingBox?: BoundingBox;
  /** Confidence level that the selected bounding box contains a face. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const comparedSourceImageFaceSchema: Schema<ComparedSourceImageFace> =
  s.object<ComparedSourceImageFace>(
    {
      boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
      confidence: s.optional(s.float64()),
      _keysMap: {
        boundingBox: "BoundingBox",
        confidence: "Confidence",
      },
    },
    { additionalProperties: s.json() },
  );
