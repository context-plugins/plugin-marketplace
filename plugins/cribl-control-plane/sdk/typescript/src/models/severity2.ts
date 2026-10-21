import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Default value for message severity. When you send logs as JSON objects, the event's '__severity'
 * field (if set) will override this value.
 */
export const Severity2 = {
  Emergency: "emergency",
  Alert: "alert",
  Critical: "critical",
  Error: "error",
  Warning: "warning",
  Notice: "notice",
  Info: "info",
  Debug: "debug",
} as const;
export type Severity2 = (typeof Severity2)[keyof typeof Severity2] | (string & {});

export const severity2Schema: EnumSchema<Severity2> = s.enumOf<Severity2>(Severity2);
