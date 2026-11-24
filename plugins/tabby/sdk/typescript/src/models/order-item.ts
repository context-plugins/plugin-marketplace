import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gender1Schema, type Gender1 } from "./gender1.js";

export type OrderItem = {
  /**
   * Merchant’s product identifier. Displayed in Customer's App and Merchant Dashboard, used for
   * Item refunds and disputes.
   */
  referenceId?: string;
  /** Name of the product. */
  title: string;
  /** Description of the product. */
  description?: string;
  /** Quantity of the product ordered. @default 1 */
  quantity?: number;
  /** Price per unit of the product. Should be positive or zero. @default "0.00" */
  unitPrice?: string;
  /** Amount of the applied discount if any. Should be positive or zero. @default "0.00" */
  discountAmount?: string;
  /** URL of the item image to show in the order information. */
  imageUrl?: string;
  /** URL of the item at your store. */
  productUrl?: string;
  /** Who the goods are designed to. */
  gender?: Gender1;
  /**
   * Required as name of high-level category (Clothes, Electronics,etc.); or a tree of
   * category-subcategory1-subcategory2; or id of the category and table with category-ids data
   * mapped provided.
   */
  category: string;
  /** white / blue/ green */
  color?: string;
  /** cotton / polyester / synthetic */
  productMaterial?: string;
  /** EU / UK */
  sizeType?: string;
  /** L / XL / 12 */
  size?: string;
  /** Mango / Dorothy Perkins / Tommy Hilfiger */
  brand?: string;
  /** Indicates whether a product can be returned */
  isRefundable?: boolean;
  /** A machine-readable product identifier. Typically used for logistics and scanning. */
  barcode?: string;
  /**
   * Product Part Number assigned by the manufacturer. Used to identify specific components or
   * versions of a product.
   */
  ppn?: string;
  /**
   * The name of the seller offering this item. This field is used to distinguish products from
   * different vendors on a single marketplace.
   */
  seller?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderItemProperties: s.Shape<OrderItem> = {
  referenceId: s.optional(s.string()),
  title: s.string(),
  description: s.optional(s.string()),
  quantity: s.defaulted(s.int(), 1),
  unitPrice: s.defaulted(s.string(), "0.00"),
  discountAmount: s.defaulted(s.string(), "0.00"),
  imageUrl: s.optional(s.string()),
  productUrl: s.optional(s.string()),
  gender: s.optional(s.lazy(() => gender1Schema)),
  category: s.string(),
  color: s.optional(s.string()),
  productMaterial: s.optional(s.string()),
  sizeType: s.optional(s.string()),
  size: s.optional(s.string()),
  brand: s.optional(s.string()),
  isRefundable: s.optional(s.boolean()),
  barcode: s.optional(s.string()),
  ppn: s.optional(s.string()),
  seller: s.optional(s.string()),
  _keysMap: {
    referenceId: "reference_id",
    unitPrice: "unit_price",
    discountAmount: "discount_amount",
    imageUrl: "image_url",
    productUrl: "product_url",
    productMaterial: "product_material",
    sizeType: "size_type",
    isRefundable: "is_refundable",
  },
};

export const orderItemInternalSchema: Schema<OrderItem> = s.object<OrderItem>(orderItemProperties, {
  additionalProperties: s.json(),
});

export const orderItemSchema: Schema<OrderItem> = s.lazySchema(() =>
  s.object<OrderItem>(
    {
      ...orderItemProperties,
      quantity: s.defaulted(s.int().check(s.gte(1)), 1),
      imageUrl: s.optional(s.string().check(s.url())),
      productUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
