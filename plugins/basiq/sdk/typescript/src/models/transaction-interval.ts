import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TransactionInterval = {
  /** Date of first transaction on this account */
  from: string;
  /** Date of last transaction on this account */
  to: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionIntervalSchema: Schema<TransactionInterval> = s.object<TransactionInterval>(
  {
    from: s.string(),
    to: s.string(),
  },
  { additionalProperties: s.json() },
);
