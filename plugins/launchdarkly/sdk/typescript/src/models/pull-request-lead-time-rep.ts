import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PullRequestLeadTimeRep = {
  /** The coding duration in milliseconds */
  codingDurationMs: number;
  /** The review duration in milliseconds */
  reviewDurationMs?: number;
  /** The max wait duration between merge time and deploy start time in milliseconds */
  maxWaitDurationMs?: number;
  /** The average wait duration between merge time and deploy start time in milliseconds */
  avgWaitDurationMs?: number;
  /** The max deploy duration in milliseconds */
  maxDeployDurationMs?: number;
  /** The average deploy duration in milliseconds */
  avgDeployDurationMs?: number;
  /** The max total lead time in milliseconds */
  maxTotalLeadTimeMs?: number;
  /** The average total lead time in milliseconds */
  avgTotalLeadTimeMs?: number;
};

export const pullRequestLeadTimeRepSchema: Schema<PullRequestLeadTimeRep> = s.object<PullRequestLeadTimeRep>({
  codingDurationMs: s.int(),
  reviewDurationMs: s.optional(s.int()),
  maxWaitDurationMs: s.optional(s.int()),
  avgWaitDurationMs: s.optional(s.int()),
  maxDeployDurationMs: s.optional(s.int()),
  avgDeployDurationMs: s.optional(s.int()),
  maxTotalLeadTimeMs: s.optional(s.int()),
  avgTotalLeadTimeMs: s.optional(s.int()),
});
