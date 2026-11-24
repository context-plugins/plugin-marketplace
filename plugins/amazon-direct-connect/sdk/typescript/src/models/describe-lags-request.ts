import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeLagsRequest = {
  /** The ID of the LAG. */
  lagId?: string;
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results,
   * make another call with the returned nextToken value. If MaxResults is given a value larger than
   * 100, only 100 results are returned.
   */
  maxResults?: number;
  /** The token for the next page of results. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeLagsRequestSchema: Schema<DescribeLagsRequest> = s.object<DescribeLagsRequest>(
  {
    lagId: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
