import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorTranscriptfetchTranscriptsApiSchema,
  type ErrorTranscriptfetchTranscriptsApi,
} from "./error-transcriptfetch-transcripts-api.js";
import {
  statusTranscriptfetchTranscriptsApiSchema,
  type StatusTranscriptfetchTranscriptsApi,
} from "./status-transcriptfetch-transcripts-api.js";
import {
  transcriptDataInternalSchema,
  transcriptDataSchema,
  type TranscriptData,
} from "./transcript-data.js";
import { usageSchema, type Usage } from "./usage.js";

/**
 * Response of the job poll endpoint. data holds the transcript once status is completed and is null
 * while processing (usage is absent then); a failed job has ok:false and an error block instead.
 */
export type JobStatusEnvelope = {
  ok: boolean;
  requestId: string;
  status: StatusTranscriptfetchTranscriptsApi;
  jobId: string;
  /** The finished transcript; null until the job completes. */
  data?: TranscriptData | null;
  usage?: Usage;
  /** Present when status is failed. */
  error?: ErrorTranscriptfetchTranscriptsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobStatusEnvelopeProperties: s.Shape<JobStatusEnvelope> = {
  ok: s.boolean(),
  requestId: s.string(),
  status: statusTranscriptfetchTranscriptsApiSchema,
  jobId: s.string(),
  data: s.optionalNullable(s.lazy(() => transcriptDataInternalSchema)),
  usage: s.optional(s.lazy(() => usageSchema)),
  error: s.optional(s.lazy(() => errorTranscriptfetchTranscriptsApiSchema)),
  _keysMap: {
    requestId: "request_id",
    jobId: "job_id",
  },
};

export const jobStatusEnvelopeInternalSchema: Schema<JobStatusEnvelope> = s.object<JobStatusEnvelope>(
  jobStatusEnvelopeProperties,
  { additionalProperties: s.json() },
);

export const jobStatusEnvelopeSchema: Schema<JobStatusEnvelope> = s.lazySchema(() =>
  s.object<JobStatusEnvelope>(
    {
      ...jobStatusEnvelopeProperties,
      data: s.optionalNullable(s.lazy(() => transcriptDataSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
