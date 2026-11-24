import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputFormatSchema, type InputFormat } from "./input-format.js";

export type EntityRecognizerDocuments = {
  /**
   * Specifies the Amazon S3 location where the training documents for an entity recognizer are
   * located. The URI must be in the same Region as the API endpoint that you are calling.
   */
  s3Uri: string;
  /**
   * Specifies the Amazon S3 location where the test documents for an entity recognizer are located.
   * The URI must be in the same Amazon Web Services Region as the API endpoint that you are
   * calling.
   */
  testS3Uri?: string;
  /**
   * Specifies how the text in an input file should be processed. This is optional, and the default
   * is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document. Use this
   * option when you are processing large documents, such as newspaper articles or scientific
   * papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this
   * option when you are processing many short documents, such as text messages.
   */
  inputFormat?: InputFormat;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerDocumentsSchema: Schema<EntityRecognizerDocuments> =
  s.object<EntityRecognizerDocuments>(
    {
      s3Uri: s.string(),
      testS3Uri: s.optional(s.string()),
      inputFormat: s.optional(s.lazy(() => inputFormatSchema)),
      _keysMap: {
        s3Uri: "S3Uri",
        testS3Uri: "TestS3Uri",
        inputFormat: "InputFormat",
      },
    },
    { additionalProperties: s.json() },
  );
