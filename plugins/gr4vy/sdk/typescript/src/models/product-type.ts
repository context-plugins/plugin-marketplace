import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductType = {
  Physical: "physical",
  Discount: "discount",
  ShippingFee: "shipping_fee",
  SalesTax: "sales_tax",
  Digital: "digital",
  GiftCard: "gift_card",
  StoreCredit: "store_credit",
  Surcharge: "surcharge",
} as const;
export type ProductType = (typeof ProductType)[keyof typeof ProductType] | (string & {});

export const productTypeSchema: EnumSchema<ProductType> = s.enumOf<ProductType>(ProductType);
