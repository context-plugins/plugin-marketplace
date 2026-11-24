import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { linksEnrichApiSchema, type LinksEnrichApi } from "./links-enrich-api.js";
import { locationSchema, type Location } from "./location.js";
import { merchantSchema, type Merchant } from "./merchant.js";

export type SingleMerchantResponse = {
  source?: string;
  merchant?: Merchant;
  category?: Category;
  location?: Location;
  links?: LinksEnrichApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const singleMerchantResponseSchema: Schema<SingleMerchantResponse> = s.object<SingleMerchantResponse>(
  {
    source: s.optional(s.string()),
    merchant: s.optional(s.lazy(() => merchantSchema)),
    category: s.optional(s.lazy(() => categorySchema)),
    location: s.optional(s.lazy(() => locationSchema)),
    links: s.optional(s.lazy(() => linksEnrichApiSchema)),
  },
  { additionalProperties: s.json() },
);
