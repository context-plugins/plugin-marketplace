import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  availableProductsInternalSchema,
  availableProductsSchema,
  type AvailableProducts,
} from "./available-products.js";
import { productsSchema, type Products } from "./products.js";

/** Some details associated with the current session. */
export type Configuration = {
  availableProducts?: AvailableProducts | null;
  /** Products and theirs availability */
  products?: Products;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const configurationProperties: s.Shape<Configuration> = {
  availableProducts: s.optionalNullable(s.lazy(() => availableProductsInternalSchema)),
  products: s.optional(s.lazy(() => productsSchema)),
  _keysMap: {
    availableProducts: "available_products",
  },
};

export const configurationInternalSchema: Schema<Configuration> = s.object<Configuration>(
  configurationProperties,
  { additionalProperties: s.json() },
);

export const configurationSchema: Schema<Configuration> = s.lazySchema(() =>
  s.object<Configuration>(
    {
      ...configurationProperties,
      availableProducts: s.optionalNullable(s.lazy(() => availableProductsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
