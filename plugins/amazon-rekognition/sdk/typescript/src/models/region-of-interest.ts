import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import { pointSchema, type Point } from "./point.js";

export type RegionOfInterest = {
  boundingBox?: BoundingBox;
  /** Specifies a shape made up of up to 10 Point objects to define a region of interest. */
  polygon?: Point[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const regionOfInterestSchema: Schema<RegionOfInterest> = s.object<RegionOfInterest>(
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
