import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import { pointSchema, type Point } from "./point.js";

export type Geometry = {
  boundingBox?: BoundingBox;
  /** Within the bounding box, a fine-grained polygon around the recognized item. */
  polygon?: Point[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geometrySchema: Schema<Geometry> = s.object<Geometry>(
  {
    boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
    polygon: s.optional(s.array(s.lazy(() => pointSchema))),
    _keysMap: {
      boundingBox: "BoundingBox",
      polygon: "Polygon",
    },
  },
  { additionalProperties: s.json() },
);
