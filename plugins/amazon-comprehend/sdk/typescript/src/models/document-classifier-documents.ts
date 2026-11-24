import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocumentClassifierDocuments = {
  /** The S3 URI location of the training documents specified in the S3Uri CSV file. */
  s3Uri: string;
  /**
   * The S3 URI location of the test documents included in the TestS3Uri CSV file. This field is not
   * required if you do not specify a test CSV file.
   */
  testS3Uri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentClassifierDocumentsSchema: Schema<DocumentClassifierDocuments> =
  s.object<DocumentClassifierDocuments>(
    {
      s3Uri: s.string(),
      testS3Uri: s.optional(s.string()),
      _keysMap: {
        s3Uri: "S3Uri",
        testS3Uri: "TestS3Uri",
      },
    },
    { additionalProperties: s.json() },
  );
