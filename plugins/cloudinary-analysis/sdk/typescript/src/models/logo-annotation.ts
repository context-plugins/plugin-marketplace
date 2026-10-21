import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boundingPolySchema, type BoundingPoly } from "./bounding-poly.js";

export type LogoAnnotation = {
  mid?: string;
  description: string;
  score: number;
  boundingPoly: BoundingPoly;
};

export const logoAnnotationSchema: Schema<LogoAnnotation> = s.object<LogoAnnotation>({
  mid: s.optional(s.string()),
  description: s.string(),
  score: s.float64(),
  boundingPoly: boundingPolySchema,
  _keysMap: {
    boundingPoly: "bounding_poly",
  },
});
