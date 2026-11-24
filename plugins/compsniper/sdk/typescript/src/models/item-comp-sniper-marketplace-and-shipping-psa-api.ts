import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ItemCompSniperMarketplaceAndShippingPsaApi = {
  specId?: string;
  description?: string;
  subject?: string;
  cardNumber?: string | null;
  setName?: string | null;
  year?: string | null;
  category?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemCompSniperMarketplaceAndShippingPsaApiSchema: Schema<ItemCompSniperMarketplaceAndShippingPsaApi> =
  s.object<ItemCompSniperMarketplaceAndShippingPsaApi>(
    {
      specId: s.optional(s.string()),
      description: s.optional(s.string()),
      subject: s.optional(s.string()),
      cardNumber: s.optionalNullable(s.string()),
      setName: s.optionalNullable(s.string()),
      year: s.optionalNullable(s.string()),
      category: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
