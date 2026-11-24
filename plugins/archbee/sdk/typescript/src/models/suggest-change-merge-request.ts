import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SuggestChangeMergeRequest = {
  /** The ID of the suggestion document to merge. Must start with 'SUGGEST-'. */
  docId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const suggestChangeMergeRequestSchema: Schema<SuggestChangeMergeRequest> =
  s.object<SuggestChangeMergeRequest>(
    {
      docId: s.string(),
    },
    { additionalProperties: s.json() },
  );
