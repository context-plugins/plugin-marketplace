import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transcriptJobDataSchema, type TranscriptJobData } from "./transcript-job-data.js";

/**
 * Returned with HTTP 202 when a request escalates to audio transcription. Poll poll_url (or wait
 * for the callback_url delivery); credits are charged on delivery, not here.
 */
export type JobAcceptedEnvelope2 = {
  /** @default "True" */
  ok?: "True";
  requestId: string;
  /** @default "processing" */
  status?: "processing";
  jobId: string;
  /** Path of the job endpoint to poll. */
  pollUrl: string;
  /** Placeholder data block on a 202: identifies what is being transcribed while the job runs. */
  data?: TranscriptJobData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobAcceptedEnvelope2Schema: Schema<JobAcceptedEnvelope2> = s.object<JobAcceptedEnvelope2>(
  {
    ok: s.defaulted(s.literal("True"), "True"),
    requestId: s.string(),
    status: s.defaulted(s.literal("processing"), "processing"),
    jobId: s.string(),
    pollUrl: s.string(),
    data: s.optional(s.lazy(() => transcriptJobDataSchema)),
    _keysMap: {
      requestId: "request_id",
      jobId: "job_id",
      pollUrl: "poll_url",
    },
  },
  { additionalProperties: s.json() },
);
