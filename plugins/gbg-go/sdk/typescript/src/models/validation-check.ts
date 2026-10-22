import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regionOfInterestSchema, type RegionOfInterest } from "./region-of-interest.js";

export type ValidationCheck = {
  name: string;
  title: string;
  info: string;
  validationResult: string;
  resultInfo: string;
  weight: string;
  regionOfInterests?: RegionOfInterest[];
  type: string;
};

export const validationCheckSchema: Schema<ValidationCheck> = s.object<ValidationCheck>({
  name: s.string(),
  title: s.string(),
  info: s.string(),
  validationResult: s.string(),
  resultInfo: s.string(),
  weight: s.string(),
  regionOfInterests: s.optional(s.array(s.lazy(() => regionOfInterestSchema))),
  type: s.string(),
});
