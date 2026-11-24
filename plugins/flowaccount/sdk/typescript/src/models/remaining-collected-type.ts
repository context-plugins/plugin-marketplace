import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 1 = CashShortOrOver 3 = CashDiscount 5 = ExchangeRateDiff 51 = SalesCashShortOrOver 53 =
 * SalesDiscount 55 = SalesBankFee 57 = SalesExchangeRateDiff
 */
export const RemainingCollectedType = {
  _1: 1,
  _3: 3,
  _5: 5,
  _51: 51,
  _53: 53,
  _55: 55,
  _57: 57,
} as const;
export type RemainingCollectedType =
  | (typeof RemainingCollectedType)[keyof typeof RemainingCollectedType]
  | (number & {});

export const remainingCollectedTypeSchema: EnumSchema<RemainingCollectedType> =
  s.enumOf<RemainingCollectedType>(RemainingCollectedType);
