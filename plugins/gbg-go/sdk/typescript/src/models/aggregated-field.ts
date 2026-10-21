import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regionOfInterestSchema, type RegionOfInterest } from "./region-of-interest.js";

export type AggregatedField = {
  label: string;
  value: string;
  source: string;
  isNonLatin: boolean;
  regionOfInterest?: RegionOfInterest;
};

export const aggregatedFieldSchema: Schema<AggregatedField> = s.object<AggregatedField>({
  label: s.string(),
  value: s.string(),
  source: s.string(),
  isNonLatin: s.boolean(),
  regionOfInterest: s.optional(s.lazy(() => regionOfInterestSchema)),
});
