import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { referenceSentencePairSchema, type ReferenceSentencePair } from "./reference-sentence-pair.js";

/** A list of reference sentence pairs. */
export type ReferenceSentencePairList = {
  /** Reference sentence pairs. */
  referenceSentencePairs?: ReferenceSentencePair[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const referenceSentencePairListSchema: Schema<ReferenceSentencePairList> =
  s.object<ReferenceSentencePairList>(
    {
      referenceSentencePairs: s.optional(s.array(s.lazy(() => referenceSentencePairSchema))),
    },
    { additionalProperties: s.json() },
  );
