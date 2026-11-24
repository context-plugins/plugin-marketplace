import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Active 3 = InActive */
export const BankingChannelsStatus = {
  _1: 1,
  _3: 3,
} as const;
export type BankingChannelsStatus =
  | (typeof BankingChannelsStatus)[keyof typeof BankingChannelsStatus]
  | (number & {});

export const bankingChannelsStatusSchema: EnumSchema<BankingChannelsStatus> =
  s.enumOf<BankingChannelsStatus>(BankingChannelsStatus);
