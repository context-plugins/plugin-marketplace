import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1InternalSchema, data1Schema, type Data1 } from "./unions/data1.js";
import { usageSchema, type Usage } from "./usage.js";

/**
 * Returned with HTTP 202 when a request escalates to audio transcription. Poll poll_url (or wait
 * for the callback_url delivery); credits are charged on delivery, not here.
 */
export type JobAcceptedEnvelope = {
  /** @default "True" */
  ok?: "True";
  requestId: string;
  /** @default "processing" */
  status?: "processing";
  jobId: string;
  /** Path of the job endpoint to poll. */
  pollUrl: string;
  /**
   * Either a transcript_job placeholder, or a transcript block with null text/segments, depending
   * on how the request escalated.
   */
  data?: Data1;
  /**
   * Why transcription engaged and what delivery will cost, e.g. {engaged, captions_unavailable,
   * message, cost_credits}.
   */
  aiFallback?: Record<string, unknown>;
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobAcceptedEnvelopeProperties: s.Shape<JobAcceptedEnvelope> = {
  ok: s.defaulted(s.literal("True"), "True"),
  requestId: s.string(),
  status: s.defaulted(s.literal("processing"), "processing"),
  jobId: s.string(),
  pollUrl: s.string(),
  data: s.optional(s.lazy(() => data1InternalSchema)),
  aiFallback: s.optional(s.record(s.string(), s.unknown())),
  usage: s.optional(s.lazy(() => usageSchema)),
  _keysMap: {
    requestId: "request_id",
    jobId: "job_id",
    pollUrl: "poll_url",
    aiFallback: "ai_fallback",
  },
};

export const jobAcceptedEnvelopeInternalSchema: Schema<JobAcceptedEnvelope> = s.object<JobAcceptedEnvelope>(
  jobAcceptedEnvelopeProperties,
  { additionalProperties: s.json() },
);

export const jobAcceptedEnvelopeSchema: Schema<JobAcceptedEnvelope> = s.lazySchema(() =>
  s.object<JobAcceptedEnvelope>(
    {
      ...jobAcceptedEnvelopeProperties,
      data: s.optional(s.lazy(() => data1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
