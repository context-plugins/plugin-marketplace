import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specify how you want your custom vocabulary filter applied to the streaming session. To replace
 * words with ***, specify mask. To delete words, specify remove. To flag words without changing
 * them, specify tag.
 */
export const VocabularyFilterMethod1 = {
  Remove: "remove",
  Mask: "mask",
  Tag: "tag",
} as const;
export type VocabularyFilterMethod1 =
  | (typeof VocabularyFilterMethod1)[keyof typeof VocabularyFilterMethod1]
  | (string & {});

export const vocabularyFilterMethod1Schema: EnumSchema<VocabularyFilterMethod1> =
  s.enumOf<VocabularyFilterMethod1>(VocabularyFilterMethod1);
