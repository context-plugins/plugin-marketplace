import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerStateOrderStateSchema, type CustomerStateOrderState } from "./customer-state-order-state.js";

export type CustomerStateOrder = {
  id: string;
  externalId: string | null;
  name: string;
  state: CustomerStateOrderState;
  /** ISO 4217 currency code, for example USD, EUR, or GBP. */
  currency: string;
  startDate: Date;
  endDate: Date | null;
  /** When the order stops applying; null means no scheduled end. */
  effectiveUntil: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerStateOrderSchema: Schema<CustomerStateOrder> = s.object<CustomerStateOrder>(
  {
    id: s.string(),
    externalId: s.nullable(s.string()),
    name: s.string(),
    state: customerStateOrderStateSchema,
    currency: s.string(),
    startDate: s.dateTime(),
    endDate: s.nullable(s.dateTime()),
    effectiveUntil: s.nullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
