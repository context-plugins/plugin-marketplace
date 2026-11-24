import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OutputDataConfig = {
  /**
   * When you use the OutputDataConfig object with asynchronous operations, you specify the Amazon
   * S3 location where you want to write the output data. The URI must be in the same Region as the
   * API endpoint that you are calling. The location is used as the prefix for the actual location
   * of the output file. When the topic detection job is finished, the service creates an output
   * file in a directory specific to the job. The S3Uri field contains the location of the output
   * file, called output.tar.gz. It is a compressed archive that contains the ouput of the
   * operation. For a PII entity detection job, the
   */
  s3Uri: string;
  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to
   * encrypt the output results from an analysis job. Specify the Key Id of a symmetric key, because
   * you cannot use an asymmetric key for uploading data to S3. The KmsKeyId can be one of the
   * following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name
   * (ARN) of a KMS Key:
   * "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" KMS Key Alias:
   * "alias/ExampleAlias" ARN of a KMS Key Alias:
   * "arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"
   */
  kmsKeyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const outputDataConfigSchema: Schema<OutputDataConfig> = s.object<OutputDataConfig>(
  {
    s3Uri: s.string(),
    kmsKeyId: s.optional(s.string()),
    _keysMap: {
      s3Uri: "S3Uri",
      kmsKeyId: "KmsKeyId",
    },
  },
  { additionalProperties: s.json() },
);
