import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeatureType = {
  Tables: "TABLES",
  Forms: "FORMS",
} as const;
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType] | (string & {});

export const featureTypeSchema: EnumSchema<FeatureType> = s.enumOf<FeatureType>(FeatureType);
