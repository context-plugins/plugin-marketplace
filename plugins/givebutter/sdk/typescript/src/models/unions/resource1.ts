import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messageResourceSchema, type MessageResource } from "../message-resource.js";
import { recurringPlanResourceSchema, type RecurringPlanResource } from "../recurring-plan-resource.js";
import { resourceSchema, type Resource } from "../resource.js";
import { ticketResourceSchema, type TicketResource } from "../ticket-resource.js";
import {
  transactionResource2InternalSchema,
  transactionResource2Schema,
  type TransactionResource2,
} from "./transaction-resource2.js";

export type Resource1 =
  | TransactionResource2
  | Resource
  | RecurringPlanResource
  | TicketResource
  | MessageResource;

export const resource1InternalSchema: Schema<Resource1> = s.of<Resource1>(
  s.union([
    s.lazy(() => transactionResource2InternalSchema),
    s.lazy(() => resourceSchema),
    s.lazy(() => recurringPlanResourceSchema),
    s.lazy(() => ticketResourceSchema),
    s.lazy(() => messageResourceSchema),
  ]),
);

export const resource1Schema: Schema<Resource1> = s.lazySchema(() =>
  s.of<Resource1>(
    s.union([
      s.lazy(() => transactionResource2Schema),
      s.lazy(() => resourceSchema),
      s.lazy(() => recurringPlanResourceSchema),
      s.lazy(() => ticketResourceSchema),
      s.lazy(() => messageResourceSchema),
    ]),
  ),
);
