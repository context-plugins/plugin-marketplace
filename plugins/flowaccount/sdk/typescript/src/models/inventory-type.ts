import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 3 = Initial 5 = BroughtForward 7 = In 11 = TransferIn 17 = Out 21 = TransferOut 25 = CreditNote
 * 27 = DebitNote 29 = InternalUse 31 = Hold 35 = AdjustIn 39 = AdjustOut
 */
export const InventoryType = {
  _3: 3,
  _5: 5,
  _7: 7,
  _11: 11,
  _17: 17,
  _21: 21,
  _25: 25,
  _27: 27,
  _29: 29,
  _31: 31,
  _35: 35,
  _39: 39,
} as const;
export type InventoryType = (typeof InventoryType)[keyof typeof InventoryType] | (number & {});

export const inventoryTypeSchema: EnumSchema<InventoryType> = s.enumOf<InventoryType>(InventoryType);
