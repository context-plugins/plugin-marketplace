import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the void call. */
export const VoidStatus2 = {
  Succeeded: "succeeded",
  Pending: "pending",
  Declined: "declined",
  Failed: "failed",
} as const;
export type VoidStatus2 = (typeof VoidStatus2)[keyof typeof VoidStatus2] | (string & {});

export const voidStatus2Schema: EnumSchema<VoidStatus2> = s.enumOf<VoidStatus2>(VoidStatus2);
