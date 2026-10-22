import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current status of the conversation:
 * - `None` — no activity yet
 * - `Inprogress` — AI is processing
 * - `Complete` — response ready
 * - `Failed` — error occurred
 * - `Stopped` — cancelled, or the client disconnected mid-answer; the last message keeps the
 *   partial answer
 */
export const Status3 = {
  None: "None",
  Inprogress: "Inprogress",
  Complete: "Complete",
  Failed: "Failed",
  Stopped: "Stopped",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
