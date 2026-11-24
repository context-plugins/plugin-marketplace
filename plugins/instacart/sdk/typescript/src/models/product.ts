import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Product = {
  /** The retailer's unique product identifier used to match the product in the Instacart system. */
  productCode: string;
  /** The display name of the product. */
  name: string;
  /** The brand name of the product. */
  brand?: string;
  /** A detailed description of the product. */
  description?: string;
  /** The size or quantity description of the product. */
  size?: string;
  /** The Universal Product Code for the product. */
  upc?: string;
  /** URL to the primary product image. */
  imageUrl?: string;
  /** The product category in the retailer's taxonomy. */
  category?: string;
  /** The product subcategory. */
  subcategory?: string;
  /** The store department the product belongs to. */
  department?: string;
  /** Additional product attributes such as dietary information or certifications. */
  attributes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const productProperties: s.Shape<Product> = {
  productCode: s.string(),
  name: s.string(),
  brand: s.optional(s.string()),
  description: s.optional(s.string()),
  size: s.optional(s.string()),
  upc: s.optional(s.string()),
  imageUrl: s.optional(s.string()),
  category: s.optional(s.string()),
  subcategory: s.optional(s.string()),
  department: s.optional(s.string()),
  attributes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    productCode: "product_code",
    imageUrl: "image_url",
  },
};

export const productInternalSchema: Schema<Product> = s.object<Product>(productProperties, {
  additionalProperties: s.json(),
});

export const productSchema: Schema<Product> = s.lazySchema(() =>
  s.object<Product>(
    {
      ...productProperties,
      imageUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
