import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Severity level of the alert */
export const AlertSeverity = {
  Info: "Info",
  Warn: "Warn",
  Error: "Error",
  Fatal: "Fatal",
} as const;
export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity] | (string & {});

export const alertSeveritySchema: EnumSchema<AlertSeverity> = s.enumOf<AlertSeverity>(AlertSeverity);
