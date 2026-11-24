import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the vocabulary filtering method used in your Call Analytics transcription. */
export const VocabularyFilterMethod2 = {
  Remove: "remove",
  Mask: "mask",
  Tag: "tag",
} as const;
export type VocabularyFilterMethod2 =
  | (typeof VocabularyFilterMethod2)[keyof typeof VocabularyFilterMethod2]
  | (string & {});

export const vocabularyFilterMethod2Schema: EnumSchema<VocabularyFilterMethod2> =
  s.enumOf<VocabularyFilterMethod2>(VocabularyFilterMethod2);
