import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The add-on a quota applies to. */
export const Feature = {
  ImageGeneration: "image_generation",
} as const;
export type Feature = (typeof Feature)[keyof typeof Feature] | (string & {});

export const featureSchema: EnumSchema<Feature> = s.enumOf<Feature>(Feature);
