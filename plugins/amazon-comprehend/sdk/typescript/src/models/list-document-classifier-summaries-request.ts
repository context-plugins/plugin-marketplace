import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListDocumentClassifierSummariesRequest = {
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** The maximum number of results to return on each page. The default is 100. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDocumentClassifierSummariesRequestSchema: Schema<ListDocumentClassifierSummariesRequest> =
  s.object<ListDocumentClassifierSummariesRequest>(
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
