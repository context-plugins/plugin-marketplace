import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { outcomeSchema, type Outcome } from "./outcome.js";
import { segmentSchema, type Segment } from "./segment.js";

export type BatchResult = {
  videoId?: string;
  outcome?: Outcome | null;
  /** Structured failure reason (no_captions, unavailable, upstream_error, …); null on success. */
  reason?: string | null;
  /**
   * Set on outcome "processing": the audio-transcription job started for a captionless entry.
   * Re-send the batch later or poll poll_url.
   */
  jobId?: string | null;
  /** Set on outcome "processing": path to poll for the finished transcript. */
  pollUrl?: string | null;
  /** Human-readable explanation of the failure; null on success. */
  message?: string | null;
  title?: string | null;
  text?: string | null;
  segments?: Segment[] | null;
  bytes?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchResultSchema: Schema<BatchResult> = s.object<BatchResult>(
  {
    videoId: s.optional(s.string()),
    outcome: s.optionalNullable(s.lazy(() => outcomeSchema)),
    reason: s.optionalNullable(s.string()),
    jobId: s.optionalNullable(s.string()),
    pollUrl: s.optionalNullable(s.string()),
    message: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
    text: s.optionalNullable(s.string()),
    segments: s.optionalNullable(s.array(s.lazy(() => segmentSchema))),
    bytes: s.optional(s.int()),
    _keysMap: {
      videoId: "video_id",
      jobId: "job_id",
      pollUrl: "poll_url",
    },
  },
  { additionalProperties: s.json() },
);
