import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Same values as `Conversation.status`. */
export const Status2 = {
  None: "None",
  Inprogress: "Inprogress",
  Complete: "Complete",
  Failed: "Failed",
  Stopped: "Stopped",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
