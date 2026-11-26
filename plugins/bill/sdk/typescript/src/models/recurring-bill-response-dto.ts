import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentInformationSchema, type PaymentInformation } from "./payment-information.js";
import {
  processingOptionsBillV3RecurringbillsApiSchema,
  type ProcessingOptionsBillV3RecurringbillsApi,
} from "./processing-options-bill-v3-recurringbills-api.js";
import {
  recurringBillResponseLineItemSchema,
  type RecurringBillResponseLineItem,
} from "./recurring-bill-response-line-item.js";
import {
  schedule1BillV3RecurringbillsApiSchema,
  type Schedule1BillV3RecurringbillsApi,
} from "./schedule1-bill-v3-recurringbills-api.js";

/** Recurring bills response. */
export type RecurringBillResponseDto = {
  /** BILL-generated ID of the recurring bill. The value begins with `btp`. */
  id: string;
  /** Set as `true` if the recurring bill is archived */
  archived: boolean;
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId: string;
  /** Recurring bill description */
  description?: string;
  /** Number of bills generated from this recurring bill */
  billsCount: number;
  /** Recurring bill total amount */
  amount?: number;
  /** Set as `true` if the recurring bill is expired */
  expired: boolean;
  schedule: Schedule1BillV3RecurringbillsApi;
  /** Recurring bill line item information */
  recurringBillLineItems: RecurringBillResponseLineItem[];
  processingOptions?: ProcessingOptionsBillV3RecurringbillsApi;
  paymentInformation?: PaymentInformation;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recurringBillResponseDtoSchema: Schema<RecurringBillResponseDto> =
  s.object<RecurringBillResponseDto>(
    {
      id: s.string(),
      archived: s.boolean(),
      vendorId: s.string(),
      description: s.optional(s.string()),
      billsCount: s.int(),
      amount: s.optional(s.float64()),
      expired: s.boolean(),
      schedule: schedule1BillV3RecurringbillsApiSchema,
      recurringBillLineItems: s.array(s.lazy(() => recurringBillResponseLineItemSchema)),
      processingOptions: s.optional(s.lazy(() => processingOptionsBillV3RecurringbillsApiSchema)),
      paymentInformation: s.optional(s.lazy(() => paymentInformationSchema)),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
