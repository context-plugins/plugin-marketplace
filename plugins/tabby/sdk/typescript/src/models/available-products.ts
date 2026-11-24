import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkoutConfigurationProductInternalSchema,
  checkoutConfigurationProductSchema,
  type CheckoutConfigurationProduct,
} from "./checkout-configuration-product.js";

export type AvailableProducts = {
  /** Links to redirect customers to Tabby Checkout. */
  installments?: CheckoutConfigurationProduct[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const availableProductsProperties: s.Shape<AvailableProducts> = {
  installments: s.optionalNullable(s.array(s.lazy(() => checkoutConfigurationProductInternalSchema))),
};

export const availableProductsInternalSchema: Schema<AvailableProducts> = s.object<AvailableProducts>(
  availableProductsProperties,
  { additionalProperties: s.json() },
);

export const availableProductsSchema: Schema<AvailableProducts> = s.lazySchema(() =>
  s.object<AvailableProducts>(
    {
      ...availableProductsProperties,
      installments: s.optionalNullable(s.array(s.lazy(() => checkoutConfigurationProductSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
