import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specify whether you want only a redacted transcript or both a redacted and an unredacted
 * transcript. If you choose redacted and unredacted, two JSON files are generated and stored in the
 * Amazon S3 output location you specify. Note that to include ContentRedactionOutput in your
 * request, you must enable content redaction (ContentRedactionType).
 */
export const ContentRedactionOutput = {
  Redacted: "redacted",
  RedactedAndUnredacted: "redacted_and_unredacted",
} as const;
export type ContentRedactionOutput =
  | (typeof ContentRedactionOutput)[keyof typeof ContentRedactionOutput]
  | (string & {});

export const contentRedactionOutputSchema: EnumSchema<ContentRedactionOutput> =
  s.enumOf<ContentRedactionOutput>(ContentRedactionOutput);
