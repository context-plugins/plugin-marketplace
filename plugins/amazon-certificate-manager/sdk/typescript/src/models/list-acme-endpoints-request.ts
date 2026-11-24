import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListAcmeEndpointsRequest = {
  /** A token for pagination. */
  nextToken?: string;
  /** The maximum number of results to return. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAcmeEndpointsRequestSchema: Schema<ListAcmeEndpointsRequest> =
  s.object<ListAcmeEndpointsRequest>(
    {
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
