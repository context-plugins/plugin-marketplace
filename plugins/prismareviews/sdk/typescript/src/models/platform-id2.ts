import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Only this platform. Without it, the owner chooses among the platforms of your plan. */
export const PlatformId2 = {
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
export type PlatformId2 = (typeof PlatformId2)[keyof typeof PlatformId2] | (string & {});

export const platformId2Schema: EnumSchema<PlatformId2> = s.enumOf<PlatformId2>(PlatformId2);
