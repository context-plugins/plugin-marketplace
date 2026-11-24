import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentReaderConfigSchema, type DocumentReaderConfig } from "./document-reader-config.js";
import { inputFormat2Schema, type InputFormat2 } from "./input-format2.js";

export type InputDataConfig = {
  /**
   * The Amazon S3 URI for the input data. The URI must be in same Region as the API endpoint that
   * you are calling. The URI can point to a single input file or it can provide the prefix for a
   * collection of data files. For example, if you use the URI S3://bucketName/prefix, if the prefix
   * is a single file, Amazon Comprehend uses that file as input. If more than one file begins with
   * the prefix, Amazon Comprehend uses all of them as input.
   */
  s3Uri: string;
  /**
   * Specifies how the text in an input file should be processed: ONE_DOC_PER_FILE - Each file is
   * considered a separate document. Use this option when you are processing large documents, such
   * as newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file is
   * considered a separate document. Use this option when you are processing many short documents,
   * such as text messages.
   */
  inputFormat?: InputFormat2;
  documentReaderConfig?: DocumentReaderConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputDataConfigSchema: Schema<InputDataConfig> = s.object<InputDataConfig>(
  {
    s3Uri: s.string(),
    inputFormat: s.optional(s.lazy(() => inputFormat2Schema)),
    documentReaderConfig: s.optional(s.lazy(() => documentReaderConfigSchema)),
    _keysMap: {
      s3Uri: "S3Uri",
      inputFormat: "InputFormat",
      documentReaderConfig: "DocumentReaderConfig",
    },
  },
  { additionalProperties: s.json() },
);
