import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { brandSchema, type Brand } from "./unions/brand.js";
import { categoriesSchema, type Categories } from "./unions/categories.js";
import { commodityCodeSchema, type CommodityCode } from "./unions/commodity-code.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { discountAmountSchema, type DiscountAmount } from "./unions/discount-amount.js";
import { dutyAmountSchema, type DutyAmount } from "./unions/duty-amount.js";
import { externalIdentifier7Schema, type ExternalIdentifier7 } from "./unions/external-identifier7.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";
import { productType1Schema, type ProductType1 } from "./unions/product-type1.js";
import { productUrlSchema, type ProductUrl } from "./unions/product-url.js";
import { sellerCountrySchema, type SellerCountry } from "./unions/seller-country.js";
import { shippingAmountSchema, type ShippingAmount } from "./unions/shipping-amount.js";
import { skuSchema, type Sku } from "./unions/sku.js";
import { subcategoriesSchema, type Subcategories } from "./unions/subcategories.js";
import { taxAmount1Schema, type TaxAmount1 } from "./unions/tax-amount1.js";
import { taxExemptSchema, type TaxExempt } from "./unions/tax-exempt.js";
import { unitOfMeasureSchema, type UnitOfMeasure } from "./unions/unit-of-measure.js";
import { upcSchema, type Upc } from "./unions/upc.js";

export type CartItem = {
  /**
   * The name of the cart item. The value you set for this property may be truncated if the maximum
   * length accepted by a payment service provider is less than 255 characters.
   */
  name: string;
  /** The quantity of this item in the cart. This value cannot be negative or zero. */
  quantity: number;
  /**
   * The amount for an individual item represented as a monetary amount in the smallest currency
   * unit for the given currency, for example `1299` USD cents represents `$12.99`. The amount sent
   * through to the payment processor as unitary amount will be calculated to include the discount
   * and tax values sent as part of this cart item.
   */
  unitAmount: number;
  /**
   * The amount discounted for this item represented as a monetary amount in the smallest currency
   * unit for the given currency, for example `1299` USD cents represents `$12.99`.
   */
  discountAmount?: DiscountAmount;
  /**
   * The tax amount for this item represented as a monetary amount in the smallest currency unit for
   * the given currency, for example `1299` USD cents represents `$12.99`.
   */
  taxAmount?: TaxAmount1;
  /**
   * An external identifier for the cart item. This can be set to any value and is not sent to the
   * payment service.
   */
  externalIdentifier?: ExternalIdentifier7;
  /** The SKU or product code for the item. */
  sku?: Sku;
  /** The UPC for the item. */
  upc?: Upc;
  /** The product URL for the item. */
  productUrl?: ProductUrl;
  /** The URL for the image of the item. */
  imageUrl?: ImageUrl;
  /** A list of strings containing product categories for the item. */
  categories?: Categories;
  /** A list of strings containing product subcategories for the item. */
  subcategories?: Subcategories;
  /** The brand of the item. */
  brand?: Brand;
  /** The product type of the cart item. */
  productType?: ProductType1;
  /** The seller country of the cart item. */
  sellerCountry?: SellerCountry;
  /** Whether the item is exempt of tax. */
  taxExempt?: TaxExempt;
  /** The unit of measure or the unit of measure code. */
  unitOfMeasure?: UnitOfMeasure;
  /** Item commodity code. Generally a UNSPSC code. */
  commodityCode?: CommodityCode;
  /** Brief item description. */
  description?: Description;
  /**
   * Item import or export duties represented as a monetary amount in the smallest currency unit for
   * the given currency, for example `1299` cents to create an authorization for `$12.99`
   */
  dutyAmount?: DutyAmount;
  /**
   * Freight/shipping amount represented as a monetary amount in the smallest currency unit for the
   * given currency, for example `1299` cents to create an authorization for `$12.99`
   */
  shippingAmount?: ShippingAmount;
};

export const cartItemSchema: Schema<CartItem> = s.object<CartItem>({
  name: s.string(),
  quantity: s.int(),
  unitAmount: s.int(),
  discountAmount: s.optional(s.lazy(() => discountAmountSchema)),
  taxAmount: s.optional(s.lazy(() => taxAmount1Schema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier7Schema)),
  sku: s.optional(s.lazy(() => skuSchema)),
  upc: s.optional(s.lazy(() => upcSchema)),
  productUrl: s.optional(s.lazy(() => productUrlSchema)),
  imageUrl: s.optional(s.lazy(() => imageUrlSchema)),
  categories: s.optional(s.lazy(() => categoriesSchema)),
  subcategories: s.optional(s.lazy(() => subcategoriesSchema)),
  brand: s.optional(s.lazy(() => brandSchema)),
  productType: s.optional(s.lazy(() => productType1Schema)),
  sellerCountry: s.optional(s.lazy(() => sellerCountrySchema)),
  taxExempt: s.optional(s.lazy(() => taxExemptSchema)),
  unitOfMeasure: s.optional(s.lazy(() => unitOfMeasureSchema)),
  commodityCode: s.optional(s.lazy(() => commodityCodeSchema)),
  description: s.optional(s.lazy(() => descriptionSchema)),
  dutyAmount: s.optional(s.lazy(() => dutyAmountSchema)),
  shippingAmount: s.optional(s.lazy(() => shippingAmountSchema)),
  _keysMap: {
    unitAmount: "unit_amount",
    discountAmount: "discount_amount",
    taxAmount: "tax_amount",
    externalIdentifier: "external_identifier",
    productUrl: "product_url",
    imageUrl: "image_url",
    productType: "product_type",
    sellerCountry: "seller_country",
    taxExempt: "tax_exempt",
    unitOfMeasure: "unit_of_measure",
    commodityCode: "commodity_code",
    dutyAmount: "duty_amount",
    shippingAmount: "shipping_amount",
  },
});
