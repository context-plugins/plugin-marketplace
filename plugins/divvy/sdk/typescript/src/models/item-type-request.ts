import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** ItemType. */
export const ItemTypeRequest = {
  Unknown: "UNKNOWN",
  Service: "SERVICE",
  Inventory: "INVENTORY",
  NonInventory: "NON_INVENTORY",
  Payment: "PAYMENT",
  Discount: "DISCOUNT",
  SalesTax: "SALES_TAX",
  Subtotal: "SUBTOTAL",
  OtherCharge: "OTHER_CHARGE",
  InventoryAssembly: "INVENTORY_ASSEMBLY",
  Group: "GROUP",
  SalesTaxGroup: "SALES_TAX_GROUP",
  FixedAsset: "FIXED_ASSET",
  Category: "CATEGORY",
  Expense: "EXPENSE",
} as const;
export type ItemTypeRequest = (typeof ItemTypeRequest)[keyof typeof ItemTypeRequest] | (string & {});

export const itemTypeRequestSchema: EnumSchema<ItemTypeRequest> = s.enumOf<ItemTypeRequest>(ItemTypeRequest);
