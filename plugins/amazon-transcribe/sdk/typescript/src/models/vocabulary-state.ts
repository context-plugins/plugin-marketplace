import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The processing state of your custom medical vocabulary. If the state is READY, you can use the
 * custom vocabulary in a StartMedicalTranscriptionJob request.
 */
export const VocabularyState = {
  Pending: "PENDING",
  Ready: "READY",
  Failed: "FAILED",
} as const;
export type VocabularyState = (typeof VocabularyState)[keyof typeof VocabularyState] | (string & {});

export const vocabularyStateSchema: EnumSchema<VocabularyState> = s.enumOf<VocabularyState>(VocabularyState);
