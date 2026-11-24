import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  documentClassifierPropertiesSchema,
  type DocumentClassifierProperties,
} from "./document-classifier-properties.js";

export type ListDocumentClassifiersResponse = {
  /** A list containing the properties of each job returned. */
  documentClassifierPropertiesList?: DocumentClassifierProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDocumentClassifiersResponseSchema: Schema<ListDocumentClassifiersResponse> =
  s.object<ListDocumentClassifiersResponse>(
    {
      documentClassifierPropertiesList: s.optional(s.array(s.lazy(() => documentClassifierPropertiesSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        documentClassifierPropertiesList: "DocumentClassifierPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
