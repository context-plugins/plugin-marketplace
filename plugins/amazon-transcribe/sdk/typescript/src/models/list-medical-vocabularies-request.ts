import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateEqualsSchema, type StateEquals } from "./state-equals.js";

export type ListMedicalVocabulariesRequest = {
  /**
   * If your ListMedicalVocabularies request returns more results than can be displayed, NextToken
   * is displayed in the response with an associated string. To get the next page of results, copy
   * this string and repeat your request, including NextToken with the value of the copied string.
   * Repeat as needed to view all your results.
   */
  nextToken?: string;
  /**
   * The maximum number of custom medical vocabularies to return in each page of results. If there
   * are fewer results than the value that you specify, only the actual results are returned. If you
   * do not specify a value, a default of 5 is used.
   */
  maxResults?: number;
  /**
   * Returns only custom medical vocabularies with the specified state. Custom vocabularies are
   * ordered by creation date, with the newest vocabulary first. If you do not include StateEquals,
   * all custom medical vocabularies are returned.
   */
  stateEquals?: StateEquals;
  /**
   * Returns only the custom medical vocabularies that contain the specified string. The search is
   * not case sensitive.
   */
  nameContains?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMedicalVocabulariesRequestSchema: Schema<ListMedicalVocabulariesRequest> =
  s.object<ListMedicalVocabulariesRequest>(
    {
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      stateEquals: s.optional(s.lazy(() => stateEqualsSchema)),
      nameContains: s.optional(s.string()),
      _keysMap: {
        nextToken: "NextToken",
        maxResults: "MaxResults",
        stateEquals: "StateEquals",
        nameContains: "NameContains",
      },
    },
    { additionalProperties: s.json() },
  );
