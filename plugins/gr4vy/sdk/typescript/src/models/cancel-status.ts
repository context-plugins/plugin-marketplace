import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CancelStatus = {
  Succeeded: "succeeded",
  Pending: "pending",
  Failed: "failed",
} as const;
export type CancelStatus = (typeof CancelStatus)[keyof typeof CancelStatus] | (string & {});

export const cancelStatusSchema: EnumSchema<CancelStatus> = s.enumOf<CancelStatus>(CancelStatus);
