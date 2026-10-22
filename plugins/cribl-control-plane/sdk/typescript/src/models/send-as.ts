import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Which signals this Destination carries. Logs sends everything to log search, including metric
 * events. Metrics routes metric events to the metric store and drops everything else. Logs and
 * Metrics routes metric events to the metric store and sends the rest to log search. Metric routing
 * requires the receiving Cribl Search Source to be enabled for metrics storage; if it is not,
 * metric events are discarded rather than stored as logs.
 */
export const SendAs = {
  Logs: "logs",
  Metrics: "metrics",
  Both: "both",
} as const;
export type SendAs = (typeof SendAs)[keyof typeof SendAs] | (string & {});

export const sendAsSchema: EnumSchema<SendAs> = s.enumOf<SendAs>(SendAs);
