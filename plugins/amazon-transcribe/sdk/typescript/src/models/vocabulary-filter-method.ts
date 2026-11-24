import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specify how you want your custom vocabulary filter applied to your transcript. To replace words
 * with ***, choose mask. To delete words, choose remove. To flag words without changing them,
 * choose tag.
 */
export const VocabularyFilterMethod = {
  Remove: "remove",
  Mask: "mask",
  Tag: "tag",
} as const;
export type VocabularyFilterMethod =
  | (typeof VocabularyFilterMethod)[keyof typeof VocabularyFilterMethod]
  | (string & {});

export const vocabularyFilterMethodSchema: EnumSchema<VocabularyFilterMethod> =
  s.enumOf<VocabularyFilterMethod>(VocabularyFilterMethod);
