import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentInformationSchema, type PaymentInformation } from "./payment-information.js";
import {
  processingOptionsBillV3RecurringbillsApiSchema,
  type ProcessingOptionsBillV3RecurringbillsApi,
} from "./processing-options-bill-v3-recurringbills-api.js";
import {
  recurringBillReplaceLineItemInternalSchema,
  recurringBillReplaceLineItemSchema,
  type RecurringBillReplaceLineItem,
} from "./recurring-bill-replace-line-item.js";
import {
  scheduleBillV3RecurringbillsApiSchema,
  type ScheduleBillV3RecurringbillsApi,
} from "./schedule-bill-v3-recurringbills-api.js";

/** Replace a recurring bill (line item added) */
export type RecurringBillReplaceRequestDto = {
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId: string;
  /**
   * User-generated invoice number. This value can be your chosen number scheme or bill due date.
   */
  description?: string;
  schedule: ScheduleBillV3RecurringbillsApi;
  /** Recurring bill line item information */
  recurringBillLineItems: RecurringBillReplaceLineItem[];
  processingOptions?: ProcessingOptionsBillV3RecurringbillsApi;
  paymentInformation?: PaymentInformation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recurringBillReplaceRequestDtoProperties: s.Shape<RecurringBillReplaceRequestDto> = {
  vendorId: s.string(),
  description: s.optional(s.string()),
  schedule: scheduleBillV3RecurringbillsApiSchema,
  recurringBillLineItems: s.array(s.lazy(() => recurringBillReplaceLineItemInternalSchema)),
  processingOptions: s.optional(s.lazy(() => processingOptionsBillV3RecurringbillsApiSchema)),
  paymentInformation: s.optional(s.lazy(() => paymentInformationSchema)),
};

export const recurringBillReplaceRequestDtoInternalSchema: Schema<RecurringBillReplaceRequestDto> =
  s.object<RecurringBillReplaceRequestDto>(recurringBillReplaceRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const recurringBillReplaceRequestDtoSchema: Schema<RecurringBillReplaceRequestDto> = s.lazySchema(() =>
  s.object<RecurringBillReplaceRequestDto>(
    {
      ...recurringBillReplaceRequestDtoProperties,
      vendorId: s.string().check(s.minLength(1)),
      description: s.optional(s.string().check(s.maxLength(4000))),
      recurringBillLineItems: s.array(s.lazy(() => recurringBillReplaceLineItemSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
