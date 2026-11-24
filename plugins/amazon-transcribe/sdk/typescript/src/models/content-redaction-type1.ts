import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Shows whether content redaction was enabled for your transcription. */
export const ContentRedactionType1 = {
  Pii: "PII",
} as const;
export type ContentRedactionType1 =
  | (typeof ContentRedactionType1)[keyof typeof ContentRedactionType1]
  | (string & {});

export const contentRedactionType1Schema: EnumSchema<ContentRedactionType1> =
  s.enumOf<ContentRedactionType1>(ContentRedactionType1);
