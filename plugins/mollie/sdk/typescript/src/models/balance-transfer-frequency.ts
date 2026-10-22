import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The frequency with which the available amount on the balance will be settled to the configured
 * transfer destination.
 *
 * Settlements created during weekends or on bank holidays will take place on the next business day.
 */
export const BalanceTransferFrequency = {
  EveryDay: "every-day",
  Daily: "daily",
  EveryMonday: "every-monday",
  EveryTuesday: "every-tuesday",
  EveryWednesday: "every-wednesday",
  EveryThursday: "every-thursday",
  EveryFriday: "every-friday",
  Monthly: "monthly",
  RevenueDay: "revenue-day",
  Never: "never",
} as const;
export type BalanceTransferFrequency =
  | (typeof BalanceTransferFrequency)[keyof typeof BalanceTransferFrequency]
  | (string & {});

export const balanceTransferFrequencySchema: EnumSchema<BalanceTransferFrequency> =
  s.enumOf<BalanceTransferFrequency>(BalanceTransferFrequency);
