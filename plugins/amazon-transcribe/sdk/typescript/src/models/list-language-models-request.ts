import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusEqualsSchema, type StatusEquals } from "./status-equals.js";

export type ListLanguageModelsRequest = {
  /**
   * Returns only custom language models with the specified status. Language models are ordered by
   * creation date, with the newest model first. If you do not include StatusEquals, all custom
   * language models are returned.
   */
  statusEquals?: StatusEquals;
  /**
   * Returns only the custom language models that contain the specified string. The search is not
   * case sensitive.
   */
  nameContains?: string;
  /**
   * If your ListLanguageModels request returns more results than can be displayed, NextToken is
   * displayed in the response with an associated string. To get the next page of results, copy this
   * string and repeat your request, including NextToken with the value of the copied string. Repeat
   * as needed to view all your results.
   */
  nextToken?: string;
  /**
   * The maximum number of custom language models to return in each page of results. If there are
   * fewer results than the value that you specify, only the actual results are returned. If you do
   * not specify a value, a default of 5 is used.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listLanguageModelsRequestSchema: Schema<ListLanguageModelsRequest> =
  s.object<ListLanguageModelsRequest>(
    {
      statusEquals: s.optional(s.lazy(() => statusEqualsSchema)),
      nameContains: s.optional(s.string()),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        statusEquals: "StatusEquals",
        nameContains: "NameContains",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
