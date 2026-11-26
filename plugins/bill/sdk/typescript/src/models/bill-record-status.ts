import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Record status enum for bills. */
export const BillRecordStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Draft: "DRAFT",
  DraftDeleted: "DRAFT_DELETED",
  Undefined: "UNDEFINED",
} as const;
export type BillRecordStatus = (typeof BillRecordStatus)[keyof typeof BillRecordStatus] | (string & {});

export const billRecordStatusSchema: EnumSchema<BillRecordStatus> =
  s.enumOf<BillRecordStatus>(BillRecordStatus);
