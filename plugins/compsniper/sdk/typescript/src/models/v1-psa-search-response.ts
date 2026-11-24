import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemCompSniperMarketplaceAndShippingPsaApiSchema,
  type ItemCompSniperMarketplaceAndShippingPsaApi,
} from "./item-comp-sniper-marketplace-and-shipping-psa-api.js";

export type V1PsaSearchResponse = {
  keyword?: string;
  marketplace?: string;
  totalResults?: number;
  totalItems?: number;
  items?: ItemCompSniperMarketplaceAndShippingPsaApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PsaSearchResponseSchema: Schema<V1PsaSearchResponse> = s.object<V1PsaSearchResponse>(
  {
    keyword: s.optional(s.string()),
    marketplace: s.optional(s.string()),
    totalResults: s.optional(s.int()),
    totalItems: s.optional(s.int()),
    items: s.optional(s.array(s.lazy(() => itemCompSniperMarketplaceAndShippingPsaApiSchema))),
  },
  { additionalProperties: s.json() },
);
