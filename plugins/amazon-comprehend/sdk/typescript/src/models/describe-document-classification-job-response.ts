import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  documentClassificationJobPropertiesSchema,
  type DocumentClassificationJobProperties,
} from "./document-classification-job-properties.js";

export type DescribeDocumentClassificationJobResponse = {
  documentClassificationJobProperties?: DocumentClassificationJobProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDocumentClassificationJobResponseSchema: Schema<DescribeDocumentClassificationJobResponse> =
  s.object<DescribeDocumentClassificationJobResponse>(
    {
      documentClassificationJobProperties: s.optional(
        s.lazy(() => documentClassificationJobPropertiesSchema),
      ),
      _keysMap: {
        documentClassificationJobProperties: "DocumentClassificationJobProperties",
      },
    },
    { additionalProperties: s.json() },
  );
