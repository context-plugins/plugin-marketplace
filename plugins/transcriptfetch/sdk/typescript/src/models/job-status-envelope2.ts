import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorBlockInternalSchema, errorBlockSchema, type ErrorBlock } from "./error-block.js";
import {
  statusTranscriptfetchTranscriptsApiSchema,
  type StatusTranscriptfetchTranscriptsApi,
} from "./status-transcriptfetch-transcripts-api.js";
import {
  transcriptData2InternalSchema,
  transcriptData2Schema,
  type TranscriptData2,
} from "./transcript-data2.js";
import { usageSchema, type Usage } from "./usage.js";

/**
 * Response of the job poll endpoint. data holds the transcript once status is completed and is null
 * while processing (usage is absent then); a failed job has ok:false and an error block instead.
 */
export type JobStatusEnvelope2 = {
  ok: boolean;
  requestId: string;
  status: StatusTranscriptfetchTranscriptsApi;
  jobId: string;
  /** The finished transcript; null until the job completes. */
  data?: TranscriptData2 | null;
  usage?: Usage;
  /**
   * Every failure carries this block. Branch on code (a stable string) or number (a stable integer
   * whose thousands digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9
   * ours; 5xxx means retry with backoff). At most one of retry_with, details, issues is present.
   * Failures are never charged.
   */
  error?: ErrorBlock;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobStatusEnvelope2Properties: s.Shape<JobStatusEnvelope2> = {
  ok: s.boolean(),
  requestId: s.string(),
  status: statusTranscriptfetchTranscriptsApiSchema,
  jobId: s.string(),
  data: s.optionalNullable(s.lazy(() => transcriptData2InternalSchema)),
  usage: s.optional(s.lazy(() => usageSchema)),
  error: s.optional(s.lazy(() => errorBlockInternalSchema)),
  _keysMap: {
    requestId: "request_id",
    jobId: "job_id",
  },
};

export const jobStatusEnvelope2InternalSchema: Schema<JobStatusEnvelope2> = s.object<JobStatusEnvelope2>(
  jobStatusEnvelope2Properties,
  { additionalProperties: s.json() },
);

export const jobStatusEnvelope2Schema: Schema<JobStatusEnvelope2> = s.lazySchema(() =>
  s.object<JobStatusEnvelope2>(
    {
      ...jobStatusEnvelope2Properties,
      data: s.optionalNullable(s.lazy(() => transcriptData2Schema)),
      error: s.optional(s.lazy(() => errorBlockSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
