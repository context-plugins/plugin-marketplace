import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MediaAnalysisOutputConfig = {
  /** Specifies the Amazon S3 bucket to contain the output of the media analysis job. */
  s3Bucket: string;
  /**
   * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated
   * for storage.
   */
  s3KeyPrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaAnalysisOutputConfigSchema: Schema<MediaAnalysisOutputConfig> =
  s.object<MediaAnalysisOutputConfig>(
    {
      s3Bucket: s.string(),
      s3KeyPrefix: s.optional(s.string()),
      _keysMap: {
        s3Bucket: "S3Bucket",
        s3KeyPrefix: "S3KeyPrefix",
      },
    },
    { additionalProperties: s.json() },
  );
