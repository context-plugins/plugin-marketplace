import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Void status enum. */
export const VoidStatus = {
  ToBeProcessed: "TO_BE_PROCESSED",
  Accepted: "ACCEPTED",
  Rejected: "REJECTED",
  NoOp: "NO_OP",
  Archived: "ARCHIVED",
} as const;
export type VoidStatus = (typeof VoidStatus)[keyof typeof VoidStatus] | (string & {});

export const voidStatusSchema: EnumSchema<VoidStatus> = s.enumOf<VoidStatus>(VoidStatus);
