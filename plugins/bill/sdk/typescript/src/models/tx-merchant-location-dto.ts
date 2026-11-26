import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Transaction merchant address info. */
export type TxMerchantLocationDto = {
  /** Merchant city */
  city?: string;
  /** Merchant state or region */
  state?: string;
  /** Merchant zip or postal code */
  postalCode?: string;
  /** Merchant country */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const txMerchantLocationDtoSchema: Schema<TxMerchantLocationDto> = s.object<TxMerchantLocationDto>(
  {
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    country: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
