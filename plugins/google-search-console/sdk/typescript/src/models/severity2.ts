import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Severity of this issue: WARNING or ERROR. */
export const Severity2 = {
  SeverityUnspecified: "SEVERITY_UNSPECIFIED",
  Warning: "WARNING",
  Error: "ERROR",
} as const;
export type Severity2 = (typeof Severity2)[keyof typeof Severity2] | (string & {});

export const severity2Schema: EnumSchema<Severity2> = s.enumOf<Severity2>(Severity2);
