import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether content identification was enabled for your transcription request. */
export const ContentIdentificationType = {
  Phi: "PHI",
} as const;
export type ContentIdentificationType =
  | (typeof ContentIdentificationType)[keyof typeof ContentIdentificationType]
  | (string & {});

export const contentIdentificationTypeSchema: EnumSchema<ContentIdentificationType> =
  s.enumOf<ContentIdentificationType>(ContentIdentificationType);
