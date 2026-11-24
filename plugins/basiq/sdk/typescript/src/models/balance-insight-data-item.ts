import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { balanceInternalSchema, balanceSchema, type Balance } from "./balance.js";

export type BalanceInsightDataItem = {
  /** The account identifier being verified */
  accountId: string;
  /** Balance verification result */
  balance?: Balance;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const balanceInsightDataItemProperties: s.Shape<BalanceInsightDataItem> = {
  accountId: s.string(),
  balance: s.optional(s.lazy(() => balanceInternalSchema)),
};

export const balanceInsightDataItemInternalSchema: Schema<BalanceInsightDataItem> =
  s.object<BalanceInsightDataItem>(balanceInsightDataItemProperties, { additionalProperties: s.json() });

export const balanceInsightDataItemSchema: Schema<BalanceInsightDataItem> = s.lazySchema(() =>
  s.object<BalanceInsightDataItem>(
    {
      ...balanceInsightDataItemProperties,
      balance: s.optional(s.lazy(() => balanceSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
