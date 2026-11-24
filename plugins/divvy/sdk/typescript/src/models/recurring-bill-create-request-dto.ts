import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentInformationSchema, type PaymentInformation } from "./payment-information.js";
import {
  processingOptionsBillV3RecurringbillsApiSchema,
  type ProcessingOptionsBillV3RecurringbillsApi,
} from "./processing-options-bill-v3-recurringbills-api.js";
import {
  recurringBillCreateLineItemInternalSchema,
  recurringBillCreateLineItemSchema,
  type RecurringBillCreateLineItem,
} from "./recurring-bill-create-line-item.js";
import {
  scheduleBillV3RecurringbillsApiSchema,
  type ScheduleBillV3RecurringbillsApi,
} from "./schedule-bill-v3-recurringbills-api.js";

/** Create a recurring bill */
export type RecurringBillCreateRequestDto = {
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId: string;
  /**
   * User-generated invoice number. This value can be your chosen number scheme or bill due date.
   */
  description?: string;
  schedule: ScheduleBillV3RecurringbillsApi;
  /** Recurring bill line item information */
  recurringBillLineItems: RecurringBillCreateLineItem[];
  processingOptions?: ProcessingOptionsBillV3RecurringbillsApi;
  paymentInformation?: PaymentInformation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recurringBillCreateRequestDtoProperties: s.Shape<RecurringBillCreateRequestDto> = {
  vendorId: s.string(),
  description: s.optional(s.string()),
  schedule: scheduleBillV3RecurringbillsApiSchema,
  recurringBillLineItems: s.array(s.lazy(() => recurringBillCreateLineItemInternalSchema)),
  processingOptions: s.optional(s.lazy(() => processingOptionsBillV3RecurringbillsApiSchema)),
  paymentInformation: s.optional(s.lazy(() => paymentInformationSchema)),
};

export const recurringBillCreateRequestDtoInternalSchema: Schema<RecurringBillCreateRequestDto> =
  s.object<RecurringBillCreateRequestDto>(recurringBillCreateRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const recurringBillCreateRequestDtoSchema: Schema<RecurringBillCreateRequestDto> = s.lazySchema(() =>
  s.object<RecurringBillCreateRequestDto>(
    {
      ...recurringBillCreateRequestDtoProperties,
      vendorId: s.string().check(s.minLength(1)),
      description: s.optional(s.string().check(s.maxLength(4000))),
      recurringBillLineItems: s.array(s.lazy(() => recurringBillCreateLineItemSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
