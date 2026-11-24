import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What a fail means: block = do not engage, warn = verify first, info = never changes the
 * recommendation
 */
export const Severity = {
  Block: "block",
  Warn: "warn",
  Info: "info",
} as const;
export type Severity = (typeof Severity)[keyof typeof Severity] | (string & {});

export const severitySchema: EnumSchema<Severity> = s.enumOf<Severity>(Severity);
