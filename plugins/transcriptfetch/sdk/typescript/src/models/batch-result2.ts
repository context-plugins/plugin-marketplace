import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorBlockInternalSchema, errorBlockSchema, type ErrorBlock } from "./error-block.js";
import { outcome1Schema, type Outcome1 } from "./outcome1.js";
import { segmentSchema, type Segment } from "./segment.js";
import { source1Schema, type Source1 } from "./source1.js";

/**
 * One entry per requested video. Exactly three outcomes: "ok" carries the transcript, "processing"
 * carries the audio-transcription job to poll, "error" carries the same error block a request-level
 * failure does.
 */
export type BatchResult2 = {
  videoId: string;
  outcome: Outcome1;
  /** outcome "ok" only. */
  title?: string | null;
  /** outcome "ok" only. */
  source?: Source1;
  /** outcome "ok" only. */
  text?: string | null;
  /** outcome "ok" only. */
  segments?: Segment[] | null;
  /** outcome "ok" only. */
  bytes?: number;
  /**
   * outcome "processing" only: the audio-transcription job started for a captionless entry. Re-send
   * the batch later or poll poll_url.
   */
  jobId?: string;
  /** outcome "processing" only: path to poll for the finished transcript. */
  pollUrl?: string;
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

const batchResult2Properties: s.Shape<BatchResult2> = {
  videoId: s.string(),
  outcome: outcome1Schema,
  title: s.optionalNullable(s.string()),
  source: s.optional(s.lazy(() => source1Schema)),
  text: s.optionalNullable(s.string()),
  segments: s.optionalNullable(s.array(s.lazy(() => segmentSchema))),
  bytes: s.optional(s.int()),
  jobId: s.optional(s.string()),
  pollUrl: s.optional(s.string()),
  error: s.optional(s.lazy(() => errorBlockInternalSchema)),
  _keysMap: {
    videoId: "video_id",
    jobId: "job_id",
    pollUrl: "poll_url",
  },
};

export const batchResult2InternalSchema: Schema<BatchResult2> = s.object<BatchResult2>(
  batchResult2Properties,
  { additionalProperties: s.json() },
);

export const batchResult2Schema: Schema<BatchResult2> = s.lazySchema(() =>
  s.object<BatchResult2>(
    {
      ...batchResult2Properties,
      error: s.optional(s.lazy(() => errorBlockSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
