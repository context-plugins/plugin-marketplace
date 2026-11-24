import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pathFormatSchema, type PathFormat } from "./path-format.js";
import { transcriptFilterSchema, type TranscriptFilter } from "./transcript-filter.js";

export type S3BucketTranscriptSource = {
  /** The name of the bucket containing the transcript and the associated metadata. */
  s3BucketName: string;
  pathFormat?: PathFormat;
  /**
   * The format of the transcript content. Currently, Genie only supports the Amazon Lex transcript
   * format.
   *
   * @default "Lex"
   */
  transcriptFormat?: "Lex";
  transcriptFilter?: TranscriptFilter;
  /**
   * The ARN of the KMS key that customer use to encrypt their Amazon S3 bucket. Only use this field
   * if your bucket is encrypted using a customer managed KMS key.
   */
  kmsKeyArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const s3BucketTranscriptSourceSchema: Schema<S3BucketTranscriptSource> =
  s.object<S3BucketTranscriptSource>(
    {
      s3BucketName: s.string(),
      pathFormat: s.optional(s.lazy(() => pathFormatSchema)),
      transcriptFormat: s.defaulted(s.literal("Lex"), "Lex"),
      transcriptFilter: s.optional(s.lazy(() => transcriptFilterSchema)),
      kmsKeyArn: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
