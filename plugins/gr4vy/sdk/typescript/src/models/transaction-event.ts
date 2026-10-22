import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";
import { Type76, type76Schema } from "./type76.js";

export type TransactionEvent = {
  /** Always `transaction-event`. @default Type76.TransactionEvent */
  type?: Type76;
  /** The ID for the event. */
  id: string;
  /** The specific event name. */
  name: Name;
  /** The date this event was created at. */
  createdAt: Date;
  /** An untyped dictionary with all the additional context for this event. */
  context: Record<string, unknown>;
};

export const transactionEventSchema: Schema<TransactionEvent> = s.object<TransactionEvent>({
  type: s.defaulted(type76Schema, Type76.TransactionEvent),
  id: s.string(),
  name: nameSchema,
  createdAt: s.dateTime(),
  context: s.record(s.string(), s.unknown()),
  _keysMap: {
    createdAt: "created_at",
  },
});
