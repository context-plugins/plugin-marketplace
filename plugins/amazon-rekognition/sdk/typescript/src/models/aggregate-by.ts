import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines how to aggregate results of the StartContentModeration request. Default aggregation
 * option is TIMESTAMPS. SEGMENTS mode aggregates moderation labels over time.
 */
export const AggregateBy = {
  Timestamps: "TIMESTAMPS",
  Segments: "SEGMENTS",
} as const;
export type AggregateBy = (typeof AggregateBy)[keyof typeof AggregateBy] | (string & {});

export const aggregateBySchema: EnumSchema<AggregateBy> = s.enumOf<AggregateBy>(AggregateBy);
