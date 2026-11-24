import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1 = {
  Pending: "pending",
  CurExportWaiting: "cur_export_waiting",
  Active: "active",
  Canceled: "canceled",
  Declined: "declined",
  Expired: "expired",
  Revoked: "revoked",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
