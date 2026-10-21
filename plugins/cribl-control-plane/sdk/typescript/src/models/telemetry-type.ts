import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Telemetry type */
export const TelemetryType = {
  Logs: "logs",
  Metrics: "metrics",
} as const;
export type TelemetryType = (typeof TelemetryType)[keyof typeof TelemetryType] | (string & {});

export const telemetryTypeSchema: EnumSchema<TelemetryType> = s.enumOf<TelemetryType>(TelemetryType);
