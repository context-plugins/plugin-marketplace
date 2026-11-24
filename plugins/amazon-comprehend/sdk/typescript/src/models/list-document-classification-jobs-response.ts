import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  documentClassificationJobPropertiesSchema,
  type DocumentClassificationJobProperties,
} from "./document-classification-job-properties.js";

export type ListDocumentClassificationJobsResponse = {
  /** A list containing the properties of each job returned. */
  documentClassificationJobPropertiesList?: DocumentClassificationJobProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDocumentClassificationJobsResponseSchema: Schema<ListDocumentClassificationJobsResponse> =
  s.object<ListDocumentClassificationJobsResponse>(
    {
      documentClassificationJobPropertiesList: s.optional(
        s.array(s.lazy(() => documentClassificationJobPropertiesSchema)),
      ),
      nextToken: s.optional(s.string()),
      _keysMap: {
        documentClassificationJobPropertiesList: "DocumentClassificationJobPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
