import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Shows whether content redaction was enabled for your Call Analytics transcription. */
export const ContentRedactionType = {
  Pii: "PII",
} as const;
export type ContentRedactionType =
  | (typeof ContentRedactionType)[keyof typeof ContentRedactionType]
  | (string & {});

export const contentRedactionTypeSchema: EnumSchema<ContentRedactionType> =
  s.enumOf<ContentRedactionType>(ContentRedactionType);
