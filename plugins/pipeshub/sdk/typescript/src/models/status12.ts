import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current status of the conversation:
 * - `None` — no activity yet
 * - `Inprogress` — AI is processing
 * - `Complete` — response ready
 * - `Failed` — error occurred
 * - `Stopped` — cancelled, or the client disconnected mid-answer
 */
export const Status12 = {
  None: "None",
  Inprogress: "Inprogress",
  Complete: "Complete",
  Failed: "Failed",
  Stopped: "Stopped",
} as const;
export type Status12 = (typeof Status12)[keyof typeof Status12] | (string & {});

export const status12Schema: EnumSchema<Status12> = s.enumOf<Status12>(Status12);
