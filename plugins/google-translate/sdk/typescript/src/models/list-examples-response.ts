import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exampleSchema, type Example } from "./example.js";

/** Response message for ListExamples. */
export type ListExamplesResponse = {
  /** The sentence pairs. */
  examples?: Example[];
  /**
   * A token to retrieve next page of results. Pass this token to the page_token field in the
   * ListExamplesRequest to obtain the corresponding page.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listExamplesResponseSchema: Schema<ListExamplesResponse> = s.object<ListExamplesResponse>(
  {
    examples: s.optional(s.array(s.lazy(() => exampleSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
