import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeContentRedactionType = {
  Pii: "PII",
} as const;
export type XAmznTranscribeContentRedactionType =
  | (typeof XAmznTranscribeContentRedactionType)[keyof typeof XAmznTranscribeContentRedactionType]
  | (string & {});

export const xAmznTranscribeContentRedactionTypeSchema: EnumSchema<XAmznTranscribeContentRedactionType> =
  s.enumOf<XAmznTranscribeContentRedactionType>(XAmznTranscribeContentRedactionType);
