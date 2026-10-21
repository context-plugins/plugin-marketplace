import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the cancel call. */
export const CancelStatus1 = {
  Succeeded: "succeeded",
  Pending: "pending",
  Failed: "failed",
} as const;
export type CancelStatus1 = (typeof CancelStatus1)[keyof typeof CancelStatus1] | (string & {});

export const cancelStatus1Schema: EnumSchema<CancelStatus1> = s.enumOf<CancelStatus1>(CancelStatus1);
