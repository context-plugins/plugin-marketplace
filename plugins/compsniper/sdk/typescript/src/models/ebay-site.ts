import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EbaySite = {
  EbayCom: "ebay.com",
  EbayCoUk: "ebay.co.uk",
  EbayDe: "ebay.de",
  EbayFr: "ebay.fr",
  EbayIt: "ebay.it",
  EbayEs: "ebay.es",
  EbayCa: "ebay.ca",
  EbayComAu: "ebay.com.au",
} as const;
export type EbaySite = (typeof EbaySite)[keyof typeof EbaySite] | (string & {});

export const ebaySiteSchema: EnumSchema<EbaySite> = s.enumOf<EbaySite>(EbaySite);
