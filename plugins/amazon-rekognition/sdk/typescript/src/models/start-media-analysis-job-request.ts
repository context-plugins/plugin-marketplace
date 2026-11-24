import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaAnalysisInputSchema, type MediaAnalysisInput } from "./media-analysis-input.js";
import {
  mediaAnalysisOperationsConfigSchema,
  type MediaAnalysisOperationsConfig,
} from "./media-analysis-operations-config.js";
import {
  mediaAnalysisOutputConfigSchema,
  type MediaAnalysisOutputConfig,
} from "./media-analysis-output-config.js";

export type StartMediaAnalysisJobRequest = {
  /**
   * Idempotency token used to prevent the accidental creation of duplicate versions. If you use the
   * same token with multiple StartMediaAnalysisJobRequest requests, the same response is returned.
   * Use ClientRequestToken to prevent the same request from being processed more than once.
   */
  clientRequestToken?: string;
  /** The name of the job. Does not have to be unique. */
  jobName?: string;
  operationsConfig: MediaAnalysisOperationsConfig;
  input: MediaAnalysisInput;
  outputConfig: MediaAnalysisOutputConfig;
  /**
   * The identifier of customer managed AWS KMS key (name or ARN). The key is used to encrypt images
   * copied into the service. The key is also used to encrypt results and manifest files written to
   * the output Amazon S3 bucket.
   */
  kmsKeyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMediaAnalysisJobRequestSchema: Schema<StartMediaAnalysisJobRequest> =
  s.object<StartMediaAnalysisJobRequest>(
    {
      clientRequestToken: s.optional(s.string()),
      jobName: s.optional(s.string()),
      operationsConfig: mediaAnalysisOperationsConfigSchema,
      input: mediaAnalysisInputSchema,
      outputConfig: mediaAnalysisOutputConfigSchema,
      kmsKeyId: s.optional(s.string()),
      _keysMap: {
        clientRequestToken: "ClientRequestToken",
        jobName: "JobName",
        operationsConfig: "OperationsConfig",
        input: "Input",
        outputConfig: "OutputConfig",
        kmsKeyId: "KmsKeyId",
      },
    },
    { additionalProperties: s.json() },
  );
