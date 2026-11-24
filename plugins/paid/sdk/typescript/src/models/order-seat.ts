import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { seatAssigneeSchema, type SeatAssignee } from "./seat-assignee.js";
import { seatAssignmentStatusSchema, type SeatAssignmentStatus } from "./seat-assignment-status.js";

export type OrderSeat = {
  id: string;
  orderId: string;
  productExternalId: string | null;
  status: SeatAssignmentStatus;
  assignee: SeatAssignee;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderSeatSchema: Schema<OrderSeat> = s.object<OrderSeat>(
  {
    id: s.string(),
    orderId: s.string(),
    productExternalId: s.nullable(s.string()),
    status: seatAssignmentStatusSchema,
    assignee: seatAssigneeSchema,
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
