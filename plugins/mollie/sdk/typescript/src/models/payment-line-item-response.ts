import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount10Schema, type Amount10 } from "./amount10.js";
import { amount11Schema, type Amount11 } from "./amount11.js";
import { amount8Schema, type Amount8 } from "./amount8.js";
import { amount9Schema, type Amount9 } from "./amount9.js";
import { lineCategoriesResponseSchema, type LineCategoriesResponse } from "./line-categories-response.js";
import { paymentLineTypeResponseSchema, type PaymentLineTypeResponse } from "./payment-line-type-response.js";

export type PaymentLineItemResponse = {
  /**
   * The type of product purchased. For example, a physical or a digital product.
   *
   * The `tip` payment line type is not available when creating a payment.
   */
  type?: PaymentLineTypeResponse;
  /** A description of the line item. For example *LEGO 4440 Forest Police Station*. */
  description: string;
  /** The number of items. */
  quantity: number;
  /** The unit for the quantity. For example *pcs*, *kg*, or *cm*. */
  quantityUnit?: string;
  /**
   * The price of a single item including VAT.
   *
   * For example: `{"currency":"EUR", "value":"89.00"}` if the box of LEGO costs €89.00 each.
   *
   * For types `discount`, `store_credit`, and `gift_card`, the unit price must be negative.
   *
   * The unit price can be zero in case of free items.
   */
  unitPrice: Amount8;
  /**
   * Any line-specific discounts, as a positive amount. Not relevant if the line itself is already a
   * discount type.
   */
  discountAmount?: Amount9;
  /**
   * The total amount of the line, including VAT and discounts.
   *
   * Should match the following formula: `(unitPrice × quantity) - discountAmount`.
   *
   * The sum of all `totalAmount` values of all order lines should be equal to the full payment
   * amount.
   */
  totalAmount: Amount10;
  /**
   * The VAT rate applied to the line, for example `21.00` for 21%. The vatRate should be passed as
   * a string and not as a float, to ensure the correct number of decimals are passed.
   */
  vatRate?: string;
  /**
   * The amount of value-added tax on the line. The `totalAmount` field includes VAT, so the
   * `vatAmount` can be calculated with the formula `totalAmount × (vatRate / (100 + vatRate))`.
   *
   * Any deviations from this will result in an error.
   *
   * For example, for a `totalAmount` of SEK 100.00 with a 25.00% VAT rate, we expect a VAT amount
   * of `SEK 100.00 × (25 / 125) = SEK 20.00`.
   */
  vatAmount?: Amount11;
  /** The SKU, EAN, ISBN or UPC of the product sold. */
  sku?: string;
  /**
   * An array with the voucher categories, in case of a line eligible for a voucher. See the
   * [Integrating Vouchers](https://docs.mollie.com/docs/integrating-vouchers/) guide for more
   * information.
   */
  categories?: LineCategoriesResponse[];
  /** A link pointing to an image of the product sold. */
  imageUrl?: string;
  /** A link pointing to the product page in your web shop of the product sold. */
  productUrl?: string;
};

export const paymentLineItemResponseSchema: Schema<PaymentLineItemResponse> =
  s.object<PaymentLineItemResponse>({
    type: s.optional(s.lazy(() => paymentLineTypeResponseSchema)),
    description: s.string(),
    quantity: s.int(),
    quantityUnit: s.optional(s.string()),
    unitPrice: amount8Schema,
    discountAmount: s.optional(s.lazy(() => amount9Schema)),
    totalAmount: amount10Schema,
    vatRate: s.optional(s.string()),
    vatAmount: s.optional(s.lazy(() => amount11Schema)),
    sku: s.optional(s.string()),
    categories: s.optional(s.array(s.lazy(() => lineCategoriesResponseSchema))),
    imageUrl: s.optional(s.string()),
    productUrl: s.optional(s.string()),
  });
