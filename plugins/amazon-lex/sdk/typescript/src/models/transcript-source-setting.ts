import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  s3BucketTranscriptSourceSchema,
  type S3BucketTranscriptSource,
} from "./s3-bucket-transcript-source.js";

export type TranscriptSourceSetting = {
  s3BucketTranscriptSource?: S3BucketTranscriptSource;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptSourceSettingSchema: Schema<TranscriptSourceSetting> =
  s.object<TranscriptSourceSetting>(
    {
      s3BucketTranscriptSource: s.optional(s.lazy(() => s3BucketTranscriptSourceSchema)),
    },
    { additionalProperties: s.json() },
  );
