import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Minimum level of diagnostics to return. ERROR returns only ERROR diagnostics, whereas WARNING
 * returns both WARNING and ERROR diagnostics. The default is ERROR.
 */
export const Severity1 = {
  Error: "ERROR",
  Warning: "WARNING",
} as const;
export type Severity1 = (typeof Severity1)[keyof typeof Severity1] | (string & {});

export const severity1Schema: EnumSchema<Severity1> = s.enumOf<Severity1>(Severity1);
