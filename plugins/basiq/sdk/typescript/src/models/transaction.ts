import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Transaction = {
  /** Identifier for the transaction */
  id?: string;
  /** Date of the transaction */
  date?: string;
  /** Description of the transaction */
  description?: string;
  /** Amount of the transaction */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>(
  {
    id: s.optional(s.string()),
    date: s.optional(s.dateOnly()),
    description: s.optional(s.string()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
