import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phraseSetSchema, type PhraseSet } from "./phrase-set.js";

/** Message returned to the client by the `ListPhraseSet` method. */
export type ListPhraseSetResponse = {
  /** The phrase set. */
  phraseSets?: PhraseSet[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPhraseSetResponseSchema: Schema<ListPhraseSetResponse> = s.object<ListPhraseSetResponse>(
  {
    phraseSets: s.optional(s.array(s.lazy(() => phraseSetSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
