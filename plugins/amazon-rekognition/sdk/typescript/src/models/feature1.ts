import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Feature1 = {
  ContentModeration: "CONTENT_MODERATION",
  CustomLabels: "CUSTOM_LABELS",
} as const;
export type Feature1 = (typeof Feature1)[keyof typeof Feature1] | (string & {});

export const feature1Schema: EnumSchema<Feature1> = s.enumOf<Feature1>(Feature1);
