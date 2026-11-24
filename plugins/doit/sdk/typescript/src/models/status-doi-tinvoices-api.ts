import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the invoice */
export const StatusDoiTInvoicesApi = {
  Open: "OPEN",
  PastDue: "PAST DUE",
  Paid: "PAID",
} as const;
export type StatusDoiTInvoicesApi =
  | (typeof StatusDoiTInvoicesApi)[keyof typeof StatusDoiTInvoicesApi]
  | (string & {});

export const statusDoiTInvoicesApiSchema: EnumSchema<StatusDoiTInvoicesApi> =
  s.enumOf<StatusDoiTInvoicesApi>(StatusDoiTInvoicesApi);
