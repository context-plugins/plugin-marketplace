import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputFormatSchema, type InputFormat } from "./input-format.js";

export type DatasetEntityRecognizerDocuments = {
  /** Specifies the Amazon S3 location where the documents for the dataset are located. */
  s3Uri: string;
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

export const datasetEntityRecognizerDocumentsSchema: Schema<DatasetEntityRecognizerDocuments> =
  s.object<DatasetEntityRecognizerDocuments>(
    {
      s3Uri: s.string(),
      inputFormat: s.optional(s.lazy(() => inputFormatSchema)),
      _keysMap: {
        s3Uri: "S3Uri",
        inputFormat: "InputFormat",
      },
    },
    { additionalProperties: s.json() },
  );
