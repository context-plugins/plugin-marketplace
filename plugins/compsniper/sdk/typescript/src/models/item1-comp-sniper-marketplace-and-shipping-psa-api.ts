import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item1CompSniperMarketplaceAndShippingPsaApi = {
  saleDate?: Date;
  salePrice?: number;
  saleType?: string;
  gradingCompany?: string;
  grade?: string | null;
  certNumber?: string | null;
  url?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item1CompSniperMarketplaceAndShippingPsaApiSchema: Schema<Item1CompSniperMarketplaceAndShippingPsaApi> =
  s.object<Item1CompSniperMarketplaceAndShippingPsaApi>(
    {
      saleDate: s.optional(s.dateTime()),
      salePrice: s.optional(s.float64()),
      saleType: s.optional(s.string()),
      gradingCompany: s.optional(s.string()),
      grade: s.optionalNullable(s.string()),
      certNumber: s.optionalNullable(s.string()),
      url: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
