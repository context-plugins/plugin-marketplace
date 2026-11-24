import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Platform ID.
 *
 * | ID | Platform | Connects with | Replies |
 * | --- | --- | --- | --- |
 * | `google` | Google Business Profile | oauth | by API |
 * | `app_store` | App Store | credentials | by API |
 * | `google_play` | Google Play | credentials | by API |
 * | `judge_me` | Judge.me | credentials | by API |
 * | `trustpilot` | Trustpilot | oauth | by API |
 * | `google_maps` | Google Maps | listing_url | read only |
 * | `yelp` | Yelp | listing_url | read only |
 * | `tripadvisor` | Tripadvisor | listing_url | read only |
 * | `booking` | Booking.com | listing_url | read only |
 * | `yotpo` | Yotpo | credentials | read only |
 * | `reviews_io` | REVIEWS.io | credentials | read only |
 * | `g2` | G2 | credentials | read only |
 * | `ebay` | eBay | oauth | by API |
 * | `etsy` | Etsy | listing_url | read only |
 * | `steam` | Steam | listing_url | read only |
 * | `okendo` | Okendo | credentials | read only |
 * | `feefo` | Feefo | credentials | read only |
 * | `trusted_shops` | Trusted Shops | credentials | by API |
 * | `ekomi` | eKomi | credentials | by API |
 * | `loox` | Loox | credentials | read only |
 * | `proven_expert` | ProvenExpert | credentials | read only |
 * | `shopper_approved` | Shopper Approved | credentials | read only |
 * | `wordpress` | WordPress.org | listing_url | read only |
 * | `appexchange` | Salesforce AppExchange | listing_url | read only |
 * | `facebook` | Facebook | listing_url | read only |
 * | `opentable` | OpenTable | listing_url | read only |
 * | `doordash` | DoorDash | listing_url | read only |
 * | `angi` | Angi | listing_url | read only |
 * | `checkatrade` | Checkatrade | listing_url | read only |
 * | `avvo` | Avvo | listing_url | read only |
 * | `capterra` | Capterra | listing_url | read only |
 * | `apartments` | Apartments.com | listing_url | read only |
 * | `gartner` | Gartner Peer Insights | listing_url | read only |
 * | `healthgrades` | Healthgrades | listing_url | read only |
 * | `vitals` | Vitals | listing_url | read only |
 * | `classpass` | ClassPass | listing_url | read only |
 */
export const PlatformId = {
  Google: "google",
  AppStore: "app_store",
  GooglePlay: "google_play",
  JudgeMe: "judge_me",
  Trustpilot: "trustpilot",
  GoogleMaps: "google_maps",
  Yelp: "yelp",
  Tripadvisor: "tripadvisor",
  Booking: "booking",
  Yotpo: "yotpo",
  ReviewsIo: "reviews_io",
  G2: "g2",
  Ebay: "ebay",
  Etsy: "etsy",
  Steam: "steam",
  Okendo: "okendo",
  Feefo: "feefo",
  TrustedShops: "trusted_shops",
  Ekomi: "ekomi",
  Loox: "loox",
  ProvenExpert: "proven_expert",
  ShopperApproved: "shopper_approved",
  Wordpress: "wordpress",
  Appexchange: "appexchange",
  Facebook: "facebook",
  Opentable: "opentable",
  Doordash: "doordash",
  Angi: "angi",
  Checkatrade: "checkatrade",
  Avvo: "avvo",
  Capterra: "capterra",
  Apartments: "apartments",
  Gartner: "gartner",
  Healthgrades: "healthgrades",
  Vitals: "vitals",
  Classpass: "classpass",
} as const;
export type PlatformId = (typeof PlatformId)[keyof typeof PlatformId] | (string & {});

export const platformIdSchema: EnumSchema<PlatformId> = s.enumOf<PlatformId>(PlatformId);
