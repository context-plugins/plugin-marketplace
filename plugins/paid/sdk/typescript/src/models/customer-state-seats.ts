import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerStateSeatSchema, type CustomerStateSeat } from "./customer-state-seat.js";

export type CustomerStateSeats = {
  total: number;
  assigned: number;
  unassigned: number;
  data: CustomerStateSeat[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerStateSeatsSchema: Schema<CustomerStateSeats> = s.object<CustomerStateSeats>(
  {
    total: s.int(),
    assigned: s.int(),
    unassigned: s.int(),
    data: s.array(s.lazy(() => customerStateSeatSchema)),
  },
  { additionalProperties: s.json() },
);
