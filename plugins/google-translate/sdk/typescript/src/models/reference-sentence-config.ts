import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  referenceSentencePairListSchema,
  type ReferenceSentencePairList,
} from "./reference-sentence-pair-list.js";

/** Message of caller-provided reference configuration. */
export type ReferenceSentenceConfig = {
  /** Source language code. */
  sourceLanguageCode?: string;
  /** Target language code. */
  targetLanguageCode?: string;
  /**
   * Reference sentences pair lists. Each list will be used as the references to translate the
   * sentence under "content" field at the corresponding index. Length of the list is required to be
   * equal to the length of "content" field.
   */
  referenceSentencePairLists?: ReferenceSentencePairList[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const referenceSentenceConfigSchema: Schema<ReferenceSentenceConfig> =
  s.object<ReferenceSentenceConfig>(
    {
      sourceLanguageCode: s.optional(s.string()),
      targetLanguageCode: s.optional(s.string()),
      referenceSentencePairLists: s.optional(s.array(s.lazy(() => referenceSentencePairListSchema))),
    },
    { additionalProperties: s.json() },
  );
