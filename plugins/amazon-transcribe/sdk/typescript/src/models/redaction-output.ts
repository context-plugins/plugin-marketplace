import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specify if you want only a redacted transcript, or if you want a redacted and an unredacted
 * transcript. When you choose redacted Amazon Transcribe creates only a redacted transcript. When
 * you choose redacted_and_unredacted Amazon Transcribe creates a redacted and an unredacted
 * transcript (as two separate files).
 */
export const RedactionOutput = {
  Redacted: "redacted",
  RedactedAndUnredacted: "redacted_and_unredacted",
} as const;
export type RedactionOutput = (typeof RedactionOutput)[keyof typeof RedactionOutput] | (string & {});

export const redactionOutputSchema: EnumSchema<RedactionOutput> = s.enumOf<RedactionOutput>(RedactionOutput);
