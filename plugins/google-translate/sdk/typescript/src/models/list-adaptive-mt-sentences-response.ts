import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adaptiveMtSentenceSchema, type AdaptiveMtSentence } from "./adaptive-mt-sentence.js";

/** List AdaptiveMt sentences response. */
export type ListAdaptiveMtSentencesResponse = {
  /** Optional. */
  nextPageToken?: string;
  /** Output only. The list of AdaptiveMtSentences. */
  adaptiveMtSentences?: AdaptiveMtSentence[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAdaptiveMtSentencesResponseSchema: Schema<ListAdaptiveMtSentencesResponse> =
  s.object<ListAdaptiveMtSentencesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      adaptiveMtSentences: s.optional(s.array(s.lazy(() => adaptiveMtSentenceSchema))),
    },
    { additionalProperties: s.json() },
  );
