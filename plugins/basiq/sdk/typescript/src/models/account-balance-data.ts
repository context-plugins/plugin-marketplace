import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { balance1InternalSchema, balance1Schema, type Balance1 } from "./balance1.js";

export type AccountBalanceData = {
  /** Unique identifier for the account */
  accountId: string;
  /** Balance verification result */
  balance: Balance1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountBalanceDataProperties: s.Shape<AccountBalanceData> = {
  accountId: s.string(),
  balance: balance1InternalSchema,
};

export const accountBalanceDataInternalSchema: Schema<AccountBalanceData> = s.object<AccountBalanceData>(
  accountBalanceDataProperties,
  { additionalProperties: s.json() },
);

export const accountBalanceDataSchema: Schema<AccountBalanceData> = s.lazySchema(() =>
  s.object<AccountBalanceData>(
    {
      ...accountBalanceDataProperties,
      balance: balance1Schema,
    },
    { additionalProperties: s.json() },
  ),
);
