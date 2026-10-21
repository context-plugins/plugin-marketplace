import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { custom1Schema, type Custom1 } from "./custom1.js";
import { modeOptionsHostSchema, type ModeOptionsHost } from "./mode-options-host.js";

/** Select level of detail for host metrics */
export type Host1 = {
  /** Select level of detail for host metrics */
  mode?: ModeOptionsHost;
  /** Custom host metric collection settings. */
  custom?: Custom1;
};

export const host1Schema: Schema<Host1> = s.object<Host1>({
  mode: s.optional(s.lazy(() => modeOptionsHostSchema)),
  custom: s.optional(s.lazy(() => custom1Schema)),
});
