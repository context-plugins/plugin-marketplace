import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The processing state of your custom vocabulary. If the state is READY, you can use the custom
 * vocabulary in a StartTranscriptionJob request.
 */
export const VocabularyState2 = {
  Pending: "PENDING",
  Ready: "READY",
  Failed: "FAILED",
} as const;
export type VocabularyState2 = (typeof VocabularyState2)[keyof typeof VocabularyState2] | (string & {});

export const vocabularyState2Schema: EnumSchema<VocabularyState2> =
  s.enumOf<VocabularyState2>(VocabularyState2);
