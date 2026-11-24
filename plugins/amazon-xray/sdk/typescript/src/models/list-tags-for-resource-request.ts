import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListTagsForResourceRequest = {
  /** The Amazon Resource Number (ARN) of an X-Ray group or sampling rule. */
  resourceArn: string;
  /**
   * A pagination token. If multiple pages of results are returned, use the NextToken value returned
   * with the current page of results as the value of this parameter to get the next page of
   * results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceRequestSchema: Schema<ListTagsForResourceRequest> =
  s.object<ListTagsForResourceRequest>(
    {
      resourceArn: s.string(),
      nextToken: s.optional(s.string()),
      _keysMap: {
        resourceArn: "ResourceARN",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
