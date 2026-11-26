import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Bill approval and denial actions. */
export const BillApproveDenyAction = {
  Approve: "APPROVE",
  Deny: "DENY",
} as const;
export type BillApproveDenyAction =
  | (typeof BillApproveDenyAction)[keyof typeof BillApproveDenyAction]
  | (string & {});

export const billApproveDenyActionSchema: EnumSchema<BillApproveDenyAction> =
  s.enumOf<BillApproveDenyAction>(BillApproveDenyAction);
