import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VoidStatus = {
  Succeeded: "succeeded",
  Pending: "pending",
  Declined: "declined",
  Failed: "failed",
} as const;
export type VoidStatus = (typeof VoidStatus)[keyof typeof VoidStatus] | (string & {});

export const voidStatusSchema: EnumSchema<VoidStatus> = s.enumOf<VoidStatus>(VoidStatus);
