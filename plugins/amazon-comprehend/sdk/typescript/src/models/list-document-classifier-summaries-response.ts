import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  documentClassifierSummarySchema,
  type DocumentClassifierSummary,
} from "./document-classifier-summary.js";

export type ListDocumentClassifierSummariesResponse = {
  /** The list of summaries of document classifiers. */
  documentClassifierSummariesList?: DocumentClassifierSummary[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDocumentClassifierSummariesResponseSchema: Schema<ListDocumentClassifierSummariesResponse> =
  s.object<ListDocumentClassifierSummariesResponse>(
    {
      documentClassifierSummariesList: s.optional(s.array(s.lazy(() => documentClassifierSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        documentClassifierSummariesList: "DocumentClassifierSummariesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
