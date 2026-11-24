import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the vocabulary filtering method used in your transcription. */
export const VocabularyFilterMethod3 = {
  Remove: "remove",
  Mask: "mask",
  Tag: "tag",
} as const;
export type VocabularyFilterMethod3 =
  | (typeof VocabularyFilterMethod3)[keyof typeof VocabularyFilterMethod3]
  | (string & {});

export const vocabularyFilterMethod3Schema: EnumSchema<VocabularyFilterMethod3> =
  s.enumOf<VocabularyFilterMethod3>(VocabularyFilterMethod3);
