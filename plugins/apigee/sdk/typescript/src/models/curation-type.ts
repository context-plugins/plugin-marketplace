import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The curation type for this plugin instance. */
export const CurationType = {
  CurationTypeUnspecified: "CURATION_TYPE_UNSPECIFIED",
  DefaultCurationForApiMetadata: "DEFAULT_CURATION_FOR_API_METADATA",
  CustomCurationForApiMetadata: "CUSTOM_CURATION_FOR_API_METADATA",
} as const;
export type CurationType = (typeof CurationType)[keyof typeof CurationType] | (string & {});

export const curationTypeSchema: EnumSchema<CurationType> = s.enumOf<CurationType>(CurationType);
