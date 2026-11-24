import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1TabbyApiReferencePaymentsApi = {
  Authorized: "authorized",
  Closed: "closed",
  Rejected: "rejected",
  New: "new",
  Captured: "captured",
  Refunded: "refunded",
  Cancelled: "cancelled",
} as const;
export type Status1TabbyApiReferencePaymentsApi =
  | (typeof Status1TabbyApiReferencePaymentsApi)[keyof typeof Status1TabbyApiReferencePaymentsApi]
  | (string & {});

export const status1TabbyApiReferencePaymentsApiSchema: EnumSchema<Status1TabbyApiReferencePaymentsApi> =
  s.enumOf<Status1TabbyApiReferencePaymentsApi>(Status1TabbyApiReferencePaymentsApi);
