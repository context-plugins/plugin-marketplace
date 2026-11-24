import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 0 = Default 1 = DisastersFire 3 = StolenGoods 5 = StockWrittenOff 7 = StockTakingResults 9 =
 * ReturnedStock 11 = DamagedGoods 13 = RawMaterialUsed 15 = FinishedGoodsTransfer 17 = Other
 */
export const AdjustInventoryReason = {
  _0: 0,
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
  _13: 13,
  _15: 15,
  _17: 17,
} as const;
export type AdjustInventoryReason =
  | (typeof AdjustInventoryReason)[keyof typeof AdjustInventoryReason]
  | (number & {});

export const adjustInventoryReasonSchema: EnumSchema<AdjustInventoryReason> =
  s.enumOf<AdjustInventoryReason>(AdjustInventoryReason);
