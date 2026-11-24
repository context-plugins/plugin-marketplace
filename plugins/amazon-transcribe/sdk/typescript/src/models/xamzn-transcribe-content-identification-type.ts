import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeContentIdentificationType = {
  Pii: "PII",
} as const;
export type XAmznTranscribeContentIdentificationType =
  | (typeof XAmznTranscribeContentIdentificationType)[keyof typeof XAmznTranscribeContentIdentificationType]
  | (string & {});

export const xAmznTranscribeContentIdentificationTypeSchema: EnumSchema<XAmznTranscribeContentIdentificationType> =
  s.enumOf<XAmznTranscribeContentIdentificationType>(XAmznTranscribeContentIdentificationType);
