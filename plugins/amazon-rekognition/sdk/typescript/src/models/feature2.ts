import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the project that is being customized. */
export const Feature2 = {
  ContentModeration: "CONTENT_MODERATION",
  CustomLabels: "CUSTOM_LABELS",
} as const;
export type Feature2 = (typeof Feature2)[keyof typeof Feature2] | (string & {});

export const feature2Schema: EnumSchema<Feature2> = s.enumOf<Feature2>(Feature2);
