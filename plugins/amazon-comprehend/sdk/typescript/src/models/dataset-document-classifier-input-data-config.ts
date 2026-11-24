import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetDocumentClassifierInputDataConfig = {
  /**
   * The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API
   * endpoint that you are calling. The URI can point to a single input file or it can provide the
   * prefix for a collection of input files. For example, if you use the URI S3://bucketName/prefix,
   * if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one
   * file begins with the prefix, Amazon Comprehend uses all of them as input. This parameter is
   * required if you set DataFormat to COMPREHEND_CSV.
   */
  s3Uri: string;
  /**
   * Indicates the delimiter used to separate each label for training a multi-label classifier. The
   * default delimiter between labels is a pipe (|). You can use a different character as a
   * delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the
   * training documents use a delimiter other than the default or the delimiter you specify, the
   * labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.
   */
  labelDelimiter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetDocumentClassifierInputDataConfigSchema: Schema<DatasetDocumentClassifierInputDataConfig> =
  s.object<DatasetDocumentClassifierInputDataConfig>(
    {
      s3Uri: s.string(),
      labelDelimiter: s.optional(s.string()),
      _keysMap: {
        s3Uri: "S3Uri",
        labelDelimiter: "LabelDelimiter",
      },
    },
    { additionalProperties: s.json() },
  );
