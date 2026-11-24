import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerStateCreditSummarySchema,
  type CustomerStateCreditSummary,
} from "./customer-state-credit-summary.js";
import { customerStateProductRefSchema, type CustomerStateProductRef } from "./customer-state-product-ref.js";
import {
  customerStateSeatAssigneeSchema,
  type CustomerStateSeatAssignee,
} from "./customer-state-seat-assignee.js";
import { customerStateSeatStatusSchema, type CustomerStateSeatStatus } from "./customer-state-seat-status.js";

export type CustomerStateSeat = {
  /**
   * Seat UUID. Seats do not currently have display IDs; use this value as `{seatId}` with the order
   * seat assignment endpoints.
   */
  id: string;
  orderId: string;
  product: CustomerStateProductRef;
  status: CustomerStateSeatStatus;
  assignee: CustomerStateSeatAssignee;
  credits: CustomerStateCreditSummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerStateSeatSchema: Schema<CustomerStateSeat> = s.object<CustomerStateSeat>(
  {
    id: s.string(),
    orderId: s.string(),
    product: customerStateProductRefSchema,
    status: customerStateSeatStatusSchema,
    assignee: customerStateSeatAssigneeSchema,
    credits: customerStateCreditSummarySchema,
  },
  { additionalProperties: s.json() },
);
