import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Payment Status of a bill. */
export const BillPaymentStatusDto = {
  Paid: "PAID",
  Unpaid: "UNPAID",
  PartiallyPaid: "PARTIALLY_PAID",
  Scheduled: "SCHEDULED",
  InProcess: "IN_PROCESS",
  Undefined: "UNDEFINED",
} as const;
export type BillPaymentStatusDto =
  | (typeof BillPaymentStatusDto)[keyof typeof BillPaymentStatusDto]
  | (string & {});

export const billPaymentStatusDtoSchema: EnumSchema<BillPaymentStatusDto> =
  s.enumOf<BillPaymentStatusDto>(BillPaymentStatusDto);
