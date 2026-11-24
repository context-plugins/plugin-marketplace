import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classificationsSchema, type Classifications } from "./classifications.js";
import {
  recordBillPayRequestDtoInternalSchema,
  recordBillPayRequestDtoSchema,
  type RecordBillPayRequestDto,
} from "./record-bill-pay-request-dto.js";

/** Record AP payment */
export type RecordPaymentRequestDto = {
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId: string;
  /** Payment process date. The value is in the `yyyy-MM-dd` format. */
  processDate: string;
  /**
   * Set as `true` to set the payment check as printable in your accounting system. Use this field
   * only for check payments.
   */
  toPrintCheck: boolean;
  classifications?: Classifications;
  /** Payment description */
  description?: string;
  /**
   * Payment reference ID in your accounting system. Set this field with payment information, such
   * as check number.
   */
  syncReference?: string;
  /** List of bill payments */
  payments: RecordBillPayRequestDto[];
  /** Set as `true` to sync the bill payment with your accounting system */
  allowExport?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recordPaymentRequestDtoProperties: s.Shape<RecordPaymentRequestDto> = {
  vendorId: s.string(),
  processDate: s.dateOnly(),
  toPrintCheck: s.boolean(),
  classifications: s.optional(s.lazy(() => classificationsSchema)),
  description: s.optional(s.string()),
  syncReference: s.optional(s.string()),
  payments: s.array(s.lazy(() => recordBillPayRequestDtoInternalSchema)),
  allowExport: s.optional(s.boolean()),
};

export const recordPaymentRequestDtoInternalSchema: Schema<RecordPaymentRequestDto> =
  s.object<RecordPaymentRequestDto>(recordPaymentRequestDtoProperties, { additionalProperties: s.json() });

export const recordPaymentRequestDtoSchema: Schema<RecordPaymentRequestDto> = s.lazySchema(() =>
  s.object<RecordPaymentRequestDto>(
    {
      ...recordPaymentRequestDtoProperties,
      vendorId: s.string().check(s.minLength(1)),
      payments: s.array(s.lazy(() => recordBillPayRequestDtoSchema)).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
