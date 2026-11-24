import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the comparison was produced. Absent = google-aggregator (one Google Hotels leg).
 * 'direct_fanout' = one real price call per listing id you supplied.
 */
export const Source = {
  GoogleAggregator: "google_aggregator",
  DirectFanout: "direct_fanout",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
