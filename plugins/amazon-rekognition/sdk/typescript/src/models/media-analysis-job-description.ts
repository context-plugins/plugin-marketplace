import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaAnalysisInputSchema, type MediaAnalysisInput } from "./media-analysis-input.js";
import {
  mediaAnalysisJobFailureDetailsSchema,
  type MediaAnalysisJobFailureDetails,
} from "./media-analysis-job-failure-details.js";
import {
  mediaAnalysisManifestSummarySchema,
  type MediaAnalysisManifestSummary,
} from "./media-analysis-manifest-summary.js";
import {
  mediaAnalysisOperationsConfigSchema,
  type MediaAnalysisOperationsConfig,
} from "./media-analysis-operations-config.js";
import {
  mediaAnalysisOutputConfigSchema,
  type MediaAnalysisOutputConfig,
} from "./media-analysis-output-config.js";
import { mediaAnalysisResultsSchema, type MediaAnalysisResults } from "./media-analysis-results.js";
import { status1Schema, type Status1 } from "./status1.js";

export type MediaAnalysisJobDescription = {
  /** The identifier for a media analysis job. */
  jobId: string;
  /** The name of a media analysis job. */
  jobName?: string;
  operationsConfig: MediaAnalysisOperationsConfig;
  /** The status of the media analysis job being retrieved. */
  status: Status1;
  failureDetails?: MediaAnalysisJobFailureDetails;
  /** The Unix date and time when the job was started. */
  creationTimestamp: Date;
  /** The Unix date and time when the job finished. */
  completionTimestamp?: Date;
  input: MediaAnalysisInput;
  outputConfig: MediaAnalysisOutputConfig;
  /** KMS Key that was provided in the creation request. */
  kmsKeyId?: string;
  results?: MediaAnalysisResults;
  manifestSummary?: MediaAnalysisManifestSummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaAnalysisJobDescriptionSchema: Schema<MediaAnalysisJobDescription> =
  s.object<MediaAnalysisJobDescription>(
    {
      jobId: s.string(),
      jobName: s.optional(s.string()),
      operationsConfig: mediaAnalysisOperationsConfigSchema,
      status: status1Schema,
      failureDetails: s.optional(s.lazy(() => mediaAnalysisJobFailureDetailsSchema)),
      creationTimestamp: s.dateTime(),
      completionTimestamp: s.optional(s.dateTime()),
      input: mediaAnalysisInputSchema,
      outputConfig: mediaAnalysisOutputConfigSchema,
      kmsKeyId: s.optional(s.string()),
      results: s.optional(s.lazy(() => mediaAnalysisResultsSchema)),
      manifestSummary: s.optional(s.lazy(() => mediaAnalysisManifestSummarySchema)),
      _keysMap: {
        jobId: "JobId",
        jobName: "JobName",
        operationsConfig: "OperationsConfig",
        status: "Status",
        failureDetails: "FailureDetails",
        creationTimestamp: "CreationTimestamp",
        completionTimestamp: "CompletionTimestamp",
        input: "Input",
        outputConfig: "OutputConfig",
        kmsKeyId: "KmsKeyId",
        results: "Results",
        manifestSummary: "ManifestSummary",
      },
    },
    { additionalProperties: s.json() },
  );
