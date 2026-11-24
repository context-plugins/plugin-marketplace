import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import { dominantColorSchema, type DominantColor } from "./dominant-color.js";

export type Instance = {
  boundingBox?: BoundingBox;
  /** The confidence that Amazon Rekognition has in the accuracy of the bounding box. */
  confidence?: number;
  /** The dominant colors found in an individual instance of a label. */
  dominantColors?: DominantColor[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instanceSchema: Schema<Instance> = s.object<Instance>(
  {
    boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
    confidence: s.optional(s.float64()),
    dominantColors: s.optional(s.array(s.lazy(() => dominantColorSchema))),
    _keysMap: {
      boundingBox: "BoundingBox",
      confidence: "Confidence",
      dominantColors: "DominantColors",
    },
  },
  { additionalProperties: s.json() },
);
