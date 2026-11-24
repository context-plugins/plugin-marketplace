import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Statuses = {
  New: "new",
  Declined: "declined",
  Cancelled: "cancelled",
  Refunded: "refunded",
  InProgress: "in_progress",
  EvidenceMerchant: "evidence_merchant",
  EvidenceCustomer: "evidence_customer",
} as const;
export type Statuses = (typeof Statuses)[keyof typeof Statuses] | (string & {});

export const statusesSchema: EnumSchema<Statuses> = s.enumOf<Statuses>(Statuses);
