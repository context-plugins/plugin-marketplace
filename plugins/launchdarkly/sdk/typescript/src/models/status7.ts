import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The import status */
export const Status7 = {
  Preparing: "preparing",
  PendingApproval: "pending_approval",
  Ready: "ready",
  InProgress: "in_progress",
  Complete: "complete",
  Stopped: "stopped",
} as const;
export type Status7 = (typeof Status7)[keyof typeof Status7] | (string & {});

export const status7Schema: EnumSchema<Status7> = s.enumOf<Status7>(Status7);
