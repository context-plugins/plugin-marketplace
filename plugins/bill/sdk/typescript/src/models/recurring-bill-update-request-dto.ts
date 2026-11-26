import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentInformationSchema, type PaymentInformation } from "./payment-information.js";
import {
  processingOptionsBillV3RecurringbillsApiSchema,
  type ProcessingOptionsBillV3RecurringbillsApi,
} from "./processing-options-bill-v3-recurringbills-api.js";
import {
  recurringBillUpdateLineItemInternalSchema,
  recurringBillUpdateLineItemSchema,
  type RecurringBillUpdateLineItem,
} from "./recurring-bill-update-line-item.js";
import {
  scheduleBillV3RecurringbillsApiSchema,
  type ScheduleBillV3RecurringbillsApi,
} from "./schedule-bill-v3-recurringbills-api.js";

/** Update a recurring bill */
export type RecurringBillUpdateRequestDto = {
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId?: string;
  /**
   * User-generated invoice number. This value can be your chosen number scheme or bill due date.
   */
  description?: string;
  schedule?: ScheduleBillV3RecurringbillsApi;
  /** Recurring bill line item information */
  recurringBillLineItems?: RecurringBillUpdateLineItem[];
  processingOptions?: ProcessingOptionsBillV3RecurringbillsApi;
  paymentInformation?: PaymentInformation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recurringBillUpdateRequestDtoProperties: s.Shape<RecurringBillUpdateRequestDto> = {
  vendorId: s.optional(s.string()),
  description: s.optional(s.string()),
  schedule: s.optional(s.lazy(() => scheduleBillV3RecurringbillsApiSchema)),
  recurringBillLineItems: s.optional(s.array(s.lazy(() => recurringBillUpdateLineItemInternalSchema))),
  processingOptions: s.optional(s.lazy(() => processingOptionsBillV3RecurringbillsApiSchema)),
  paymentInformation: s.optional(s.lazy(() => paymentInformationSchema)),
};

export const recurringBillUpdateRequestDtoInternalSchema: Schema<RecurringBillUpdateRequestDto> =
  s.object<RecurringBillUpdateRequestDto>(recurringBillUpdateRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const recurringBillUpdateRequestDtoSchema: Schema<RecurringBillUpdateRequestDto> = s.lazySchema(() =>
  s.object<RecurringBillUpdateRequestDto>(
    {
      ...recurringBillUpdateRequestDtoProperties,
      description: s.optional(s.string().check(s.maxLength(4000))),
      recurringBillLineItems: s.optional(s.array(s.lazy(() => recurringBillUpdateLineItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
