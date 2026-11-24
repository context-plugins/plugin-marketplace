import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CheckoutConfigurationProduct = {
  /** UAE/Kuwait: checkout.tabby.ai, KSA: checkout.tabby.sa */
  webUrl?: string | null;
  /** UAE/Kuwait: api.tabby.ai, KSA: api.tabby.sa */
  qrCode?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const checkoutConfigurationProductProperties: s.Shape<CheckoutConfigurationProduct> = {
  webUrl: s.optionalNullable(s.string()),
  qrCode: s.optionalNullable(s.string()),
  _keysMap: {
    webUrl: "web_url",
    qrCode: "qr_code",
  },
};

export const checkoutConfigurationProductInternalSchema: Schema<CheckoutConfigurationProduct> =
  s.object<CheckoutConfigurationProduct>(checkoutConfigurationProductProperties, {
    additionalProperties: s.json(),
  });

export const checkoutConfigurationProductSchema: Schema<CheckoutConfigurationProduct> = s.lazySchema(() =>
  s.object<CheckoutConfigurationProduct>(
    {
      ...checkoutConfigurationProductProperties,
      webUrl: s.optionalNullable(s.string().check(s.url())),
      qrCode: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
