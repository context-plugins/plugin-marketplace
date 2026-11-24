import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `job` (same job_id), `task` (every version of the same task), `recent` (caller's own traces,
 * requires auth), or `discover` (most-recent visible traces overall).
 */
export const RelatedKind1 = {
  Job: "job",
  Task: "task",
  Recent: "recent",
  Discover: "discover",
} as const;
export type RelatedKind1 = (typeof RelatedKind1)[keyof typeof RelatedKind1] | (string & {});

export const relatedKind1Schema: EnumSchema<RelatedKind1> = s.enumOf<RelatedKind1>(RelatedKind1);
