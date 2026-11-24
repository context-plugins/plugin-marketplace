import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListReportsOutput = {
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified
   * in maxResults. If there more items in the list, then a unique string called a nextToken is
   * returned. To get the next batch of items in the list, call this operation again, adding the
   * next token to the call. To get all of the items in the list, keep calling this operation with
   * each subsequent next token that is returned, until no more next tokens are returned.
   */
  nextToken?: string;
  /** The list of returned ARNs for the reports in the current Amazon Web Services account. */
  reports?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listReportsOutputSchema: Schema<ListReportsOutput> = s.object<ListReportsOutput>(
  {
    nextToken: s.optional(s.string()),
    reports: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
