import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Default value for event severity. If the `sev` or `__severity` fields are set on an event, the
 * first one matching will override this value.
 */
export const Severity3 = {
  Finest: "finest",
  Finer: "finer",
  Fine: "fine",
  Info: "info",
  Warning: "warning",
  Error: "error",
  Fatal: "fatal",
} as const;
export type Severity3 = (typeof Severity3)[keyof typeof Severity3] | (string & {});

export const severity3Schema: EnumSchema<Severity3> = s.enumOf<Severity3>(Severity3);
