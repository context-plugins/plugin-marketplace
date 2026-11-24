import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AdOfferAdvertiser = {
  /** The advertiser name. */
  name: string;
  /** The advertiser logo URL. */
  logoUrl?: string;
  /** The advertiser description. */
  description?: string;
  /** The advertiser website URL. */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adOfferAdvertiserSchema: Schema<AdOfferAdvertiser> = s.object<AdOfferAdvertiser>(
  {
    name: s.string(),
    logoUrl: s.optional(s.string()),
    description: s.optional(s.string()),
    url: s.optional(s.string()),
    _keysMap: {
      logoUrl: "logo_url",
    },
  },
  { additionalProperties: s.json() },
);
