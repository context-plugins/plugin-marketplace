import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventstatsConfiguration = {
  /**
   * Aggregate function(s) to perform on events. E.g.,
   * sum(bytes).where(action=='REJECT').as(TotalBytes)
   */
  aggregations?: string[];
  /** Fields to group aggregates by, supports wildcard expressions. */
  groupBys?: string[];
  /** Specifies how many events are at max kept in memory to be enriched with aggregations */
  maxEvents?: number;
  /**
   * Determines if aggregations should flush when an input stream is closed. If disabled, time
   * window settings will control flush behavior.
   */
  flushOnInputClose?: boolean;
};

export const eventstatsConfigurationSchema: Schema<EventstatsConfiguration> =
  s.object<EventstatsConfiguration>({
    aggregations: s.optional(s.array(s.string())),
    groupBys: s.optional(s.array(s.string())),
    maxEvents: s.optional(s.float64()),
    flushOnInputClose: s.optional(s.boolean()),
  });
