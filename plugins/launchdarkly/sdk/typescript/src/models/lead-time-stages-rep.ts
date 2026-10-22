import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LeadTimeStagesRep = {
  /** The coding duration in milliseconds */
  codingDurationMs: number;
  /** The review duration in milliseconds */
  reviewDurationMs?: number;
  /** The wait duration between merge time and deploy start time in milliseconds */
  waitDurationMs?: number;
  /** The deploy duration in milliseconds */
  deployDurationMs?: number;
  /** The total lead time in milliseconds */
  totalLeadTimeMs?: number;
};

export const leadTimeStagesRepSchema: Schema<LeadTimeStagesRep> = s.object<LeadTimeStagesRep>({
  codingDurationMs: s.int(),
  reviewDurationMs: s.optional(s.int()),
  waitDurationMs: s.optional(s.int()),
  deployDurationMs: s.optional(s.int()),
  totalLeadTimeMs: s.optional(s.int()),
});
