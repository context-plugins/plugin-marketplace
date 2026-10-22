import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customSchema, type Custom } from "./custom.js";
import { modeOptionsHostSchema, type ModeOptionsHost } from "./mode-options-host.js";

/** Select level of detail for host metrics */
export type Host = {
  /** Select level of detail for host metrics */
  mode?: ModeOptionsHost;
  /** Custom host metric collection settings. */
  custom?: Custom;
};

export const hostSchema: Schema<Host> = s.object<Host>({
  mode: s.optional(s.lazy(() => modeOptionsHostSchema)),
  custom: s.optional(s.lazy(() => customSchema)),
});
