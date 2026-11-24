import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Trace counts over the whole job.
 *
 * Invalidated traces count only toward ``invalidated``. ``running`` includes traces that are still
 * cancelling, and ``queued`` is pending or initializing. ``scored`` and ``unscored`` split every
 * terminal non-error trace by whether it has a reward.
 */
export type JobTraceSummary = {
  /** @default 0 */
  total?: number;
  /** @default 0 */
  running?: number;
  /** @default 0 */
  queued?: number;
  /** @default 0 */
  error?: number;
  /** @default 0 */
  scored?: number;
  /** @default 0 */
  unscored?: number;
  /** @default 0 */
  invalidated?: number;
  /** Scored rewards, clamped to [0, 1], counted in equal-width buckets. */
  rewardHistogram?: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobTraceSummarySchema: Schema<JobTraceSummary> = s.object<JobTraceSummary>(
  {
    total: s.defaulted(s.int(), 0),
    running: s.defaulted(s.int(), 0),
    queued: s.defaulted(s.int(), 0),
    error: s.defaulted(s.int(), 0),
    scored: s.defaulted(s.int(), 0),
    unscored: s.defaulted(s.int(), 0),
    invalidated: s.defaulted(s.int(), 0),
    rewardHistogram: s.optional(s.array(s.int())),
    _keysMap: {
      rewardHistogram: "reward_histogram",
    },
  },
  { additionalProperties: s.json() },
);
