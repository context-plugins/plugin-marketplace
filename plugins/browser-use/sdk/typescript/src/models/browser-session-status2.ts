import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the session (active/stopped) */
export const BrowserSessionStatus2 = {
  Active: "active",
  Stopped: "stopped",
} as const;
export type BrowserSessionStatus2 =
  | (typeof BrowserSessionStatus2)[keyof typeof BrowserSessionStatus2]
  | (string & {});

export const browserSessionStatus2Schema: EnumSchema<BrowserSessionStatus2> =
  s.enumOf<BrowserSessionStatus2>(BrowserSessionStatus2);
