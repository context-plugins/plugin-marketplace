import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeDocumentClassifierRequest = {
  /**
   * The Amazon Resource Name (ARN) that identifies the document classifier. The
   * CreateDocumentClassifier operation returns this identifier in its response.
   */
  documentClassifierArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDocumentClassifierRequestSchema: Schema<DescribeDocumentClassifierRequest> =
  s.object<DescribeDocumentClassifierRequest>(
    {
      documentClassifierArn: s.string(),
      _keysMap: {
        documentClassifierArn: "DocumentClassifierArn",
      },
    },
    { additionalProperties: s.json() },
  );
