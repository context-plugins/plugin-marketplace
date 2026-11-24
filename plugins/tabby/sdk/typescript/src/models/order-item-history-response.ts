import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gender1Schema, type Gender1 } from "./gender1.js";

export type OrderItemHistoryResponse = {
  /**
   * Merchant’s product identifier. Displayed in Customer's App and Merchant Dashboard, used for
   * Item refunds and disputes.
   */
  referenceId?: string | null;
  /** Name of the product. */
  title: string | null;
  /** Description of the product. */
  description?: string | null;
  /** Quantity of the product ordered. @default 1 */
  quantity?: number;
  /** Price per unit of the product. Should be positive or zero. @default "0" */
  unitPrice?: string;
  /** URL of the item image to show in the order information. */
  imageUrl?: string | null;
  /** URL of the item at your store. */
  productUrl?: string | null;
  /** Who the goods are designed to. */
  gender?: Gender1 | null;
  /**
   * Required as name of high-level category (Clothes, Electronics,etc.); or a tree of
   * category-subcategory1-subcategory2; or id of the category and table with category-ids data
   * mapped provided.
   */
  category: string | null;
  /** white / blue/ green */
  color?: string | null;
  /** cotton / polyester / synthetic */
  productMaterial?: string | null;
  /** EU / UK */
  sizeType?: string | null;
  /** L / XL / 12 */
  size?: string | null;
  /** Mango / Dorothy Perkins / Tommy Hilfiger */
  brand?: string | null;
  /** Indicates whether a product can be returned */
  isRefundable?: boolean | null;
  /** Quantity of SKUs in the order without a final status yet. @default 0 */
  ordered?: number;
  /** Quantity of captured SKUs in the order (paid by customer). @default 0 */
  captured?: number;
  /** Quantity of SKUs in the order shipped to the customer. @default 0 */
  shipped?: number;
  /** Quantity of SKUs in the order refunded to the customer. @default 0 */
  refunded?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderItemHistoryResponseProperties: s.Shape<OrderItemHistoryResponse> = {
  referenceId: s.optionalNullable(s.string()),
  title: s.nullable(s.string()),
  description: s.optionalNullable(s.string()),
  quantity: s.defaulted(s.int(), 1),
  unitPrice: s.defaulted(s.string(), "0"),
  imageUrl: s.optionalNullable(s.string()),
  productUrl: s.optionalNullable(s.string()),
  gender: s.optionalNullable(s.lazy(() => gender1Schema)),
  category: s.nullable(s.string()),
  color: s.optionalNullable(s.string()),
  productMaterial: s.optionalNullable(s.string()),
  sizeType: s.optionalNullable(s.string()),
  size: s.optionalNullable(s.string()),
  brand: s.optionalNullable(s.string()),
  isRefundable: s.optionalNullable(s.boolean()),
  ordered: s.defaulted(s.int(), 0),
  captured: s.defaulted(s.int(), 0),
  shipped: s.defaulted(s.int(), 0),
  refunded: s.defaulted(s.int(), 0),
  _keysMap: {
    referenceId: "reference_id",
    unitPrice: "unit_price",
    imageUrl: "image_url",
    productUrl: "product_url",
    productMaterial: "product_material",
    sizeType: "size_type",
    isRefundable: "is_refundable",
  },
};

export const orderItemHistoryResponseInternalSchema: Schema<OrderItemHistoryResponse> =
  s.object<OrderItemHistoryResponse>(orderItemHistoryResponseProperties, { additionalProperties: s.json() });

export const orderItemHistoryResponseSchema: Schema<OrderItemHistoryResponse> = s.lazySchema(() =>
  s.object<OrderItemHistoryResponse>(
    {
      ...orderItemHistoryResponseProperties,
      quantity: s.defaulted(s.int().check(s.gte(0)), 1),
      imageUrl: s.optionalNullable(s.string().check(s.url())),
      productUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
