import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How much weight to give the message.
 * * `info`: for awareness; nothing to do.
 * * `warning`: worth relaying to the user before continuing.
 * * `blocking`: the request was not served; the text says what unblocks it.
 */
export const Severity = {
  Info: "info",
  Warning: "warning",
  Blocking: "blocking",
} as const;
export type Severity = (typeof Severity)[keyof typeof Severity] | (string & {});

export const severitySchema: EnumSchema<Severity> = s.enumOf<Severity>(Severity);
