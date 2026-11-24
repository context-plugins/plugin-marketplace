import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MerchantUrls2 = {
  /** URL where to redirect after payment is Authorized. 'Thank you' page recommended. */
  success?: string | null;
  /** URL where to proceed after cancel payment status. Checkout page recommended. */
  cancel?: string | null;
  /** URL where to proceed after failure payment status (Rejected). Checkout page recommended. */
  failure?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const merchantUrls2Properties: s.Shape<MerchantUrls2> = {
  success: s.optionalNullable(s.string()),
  cancel: s.optionalNullable(s.string()),
  failure: s.optionalNullable(s.string()),
};

export const merchantUrls2InternalSchema: Schema<MerchantUrls2> = s.object<MerchantUrls2>(
  merchantUrls2Properties,
  { additionalProperties: s.json() },
);

export const merchantUrls2Schema: Schema<MerchantUrls2> = s.lazySchema(() =>
  s.object<MerchantUrls2>(
    {
      ...merchantUrls2Properties,
      success: s.optionalNullable(s.string().check(s.url())),
      cancel: s.optionalNullable(s.string().check(s.url())),
      failure: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
