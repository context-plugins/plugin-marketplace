import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  documentClassifierPropertiesSchema,
  type DocumentClassifierProperties,
} from "./document-classifier-properties.js";

export type DescribeDocumentClassifierResponse = {
  documentClassifierProperties?: DocumentClassifierProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDocumentClassifierResponseSchema: Schema<DescribeDocumentClassifierResponse> =
  s.object<DescribeDocumentClassifierResponse>(
    {
      documentClassifierProperties: s.optional(s.lazy(() => documentClassifierPropertiesSchema)),
      _keysMap: {
        documentClassifierProperties: "DocumentClassifierProperties",
      },
    },
    { additionalProperties: s.json() },
  );
