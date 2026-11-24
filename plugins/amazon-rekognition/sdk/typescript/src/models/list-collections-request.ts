import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListCollectionsRequest = {
  /** Pagination token from the previous response. */
  nextToken?: string;
  /** Maximum number of collection IDs to return. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCollectionsRequestSchema: Schema<ListCollectionsRequest> = s.object<ListCollectionsRequest>(
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
