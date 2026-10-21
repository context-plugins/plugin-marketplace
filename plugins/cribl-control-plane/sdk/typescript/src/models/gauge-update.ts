import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The operation to use when rolling up gauge metrics. Defaults to last. */
export const GaugeUpdate = {
  Last: "last",
  Max: "max",
  Min: "min",
  Avg: "avg",
} as const;
export type GaugeUpdate = (typeof GaugeUpdate)[keyof typeof GaugeUpdate] | (string & {});

export const gaugeUpdateSchema: EnumSchema<GaugeUpdate> = s.enumOf<GaugeUpdate>(GaugeUpdate);
