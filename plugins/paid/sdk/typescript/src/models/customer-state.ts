import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerStateCheckoutLinkSchema,
  type CustomerStateCheckoutLink,
} from "./customer-state-checkout-link.js";
import {
  customerStateCreditSummarySchema,
  type CustomerStateCreditSummary,
} from "./customer-state-credit-summary.js";
import { customerStateCustomerSchema, type CustomerStateCustomer } from "./customer-state-customer.js";
import { customerStateOrderSchema, type CustomerStateOrder } from "./customer-state-order.js";
import { customerStateSeatsSchema, type CustomerStateSeats } from "./customer-state-seats.js";

export type CustomerState = {
  customer: CustomerStateCustomer;
  /** ISO 4217 currency code, for example USD, EUR, or GBP. */
  defaultCurrency: string;
  orders: CustomerStateOrder[];
  seats: CustomerStateSeats;
  checkoutLinks: CustomerStateCheckoutLink[];
  credits: CustomerStateCreditSummary;
  timestamp: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerStateSchema: Schema<CustomerState> = s.object<CustomerState>(
  {
    customer: customerStateCustomerSchema,
    defaultCurrency: s.string(),
    orders: s.array(s.lazy(() => customerStateOrderSchema)),
    seats: customerStateSeatsSchema,
    checkoutLinks: s.array(s.lazy(() => customerStateCheckoutLinkSchema)),
    credits: customerStateCreditSummarySchema,
    timestamp: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
