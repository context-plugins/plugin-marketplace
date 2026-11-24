import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The aggregation method chosen for a GetContentModeration request. */
export const AggregateBy1 = {
  Timestamps: "TIMESTAMPS",
  Segments: "SEGMENTS",
} as const;
export type AggregateBy1 = (typeof AggregateBy1)[keyof typeof AggregateBy1] | (string & {});

export const aggregateBy1Schema: EnumSchema<AggregateBy1> = s.enumOf<AggregateBy1>(AggregateBy1);
