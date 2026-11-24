import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gender1Schema, type Gender1 } from "./gender1.js";

export type OrderItemResponse = {
  /**
   * Merchant’s product identifier. Displayed in Customer's App and Merchant Dashboard, used for
   * Item refunds and disputes.
   */
  referenceId?: string | null;
  /** Name of the product. */
  title: string | null;
  /** Description of the product. */
  description?: string | null;
  /** Quantity of the product ordered. @default 0 */
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderItemResponseProperties: s.Shape<OrderItemResponse> = {
  referenceId: s.optionalNullable(s.string()),
  title: s.nullable(s.string()),
  description: s.optionalNullable(s.string()),
  quantity: s.defaulted(s.int(), 0),
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

export const orderItemResponseInternalSchema: Schema<OrderItemResponse> = s.object<OrderItemResponse>(
  orderItemResponseProperties,
  { additionalProperties: s.json() },
);

export const orderItemResponseSchema: Schema<OrderItemResponse> = s.lazySchema(() =>
  s.object<OrderItemResponse>(
    {
      ...orderItemResponseProperties,
      quantity: s.defaulted(s.int().check(s.gte(0)), 0),
      imageUrl: s.optionalNullable(s.string().check(s.url())),
      productUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
