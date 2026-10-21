import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";

export type RegionOfInterest = {
  boundingBox?: BoundingBox;
  side: string;
  spectrum?: string;
  imageId?: string;
};

export const regionOfInterestSchema: Schema<RegionOfInterest> = s.object<RegionOfInterest>({
  boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
  side: s.string(),
  spectrum: s.optional(s.string()),
  imageId: s.optional(s.string()),
});
