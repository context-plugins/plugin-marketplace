import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InputDataConfig = {
  /**
   * The Amazon S3 location (URI) of the text files you want to use to train your custom language
   * model. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-model-training-data/
   */
  s3Uri: string;
  /**
   * The Amazon S3 location (URI) of the text files you want to use to tune your custom language
   * model. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-model-tuning-data/
   */
  tuningDataS3Uri?: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3
   * bucket that contains your input files. If the role that you specify doesn’t have the
   * appropriate permissions to access the specified Amazon S3 location, your request fails. IAM
   * role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example:
   * arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
   */
  dataAccessRoleArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputDataConfigSchema: Schema<InputDataConfig> = s.object<InputDataConfig>(
  {
    s3Uri: s.string(),
    tuningDataS3Uri: s.optional(s.string()),
    dataAccessRoleArn: s.string(),
    _keysMap: {
      s3Uri: "S3Uri",
      tuningDataS3Uri: "TuningDataS3Uri",
      dataAccessRoleArn: "DataAccessRoleArn",
    },
  },
  { additionalProperties: s.json() },
);
