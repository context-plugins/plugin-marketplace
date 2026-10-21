import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Delivery types for assets fetched from third-party platforms. */
export const SocialDeliveryType = {
  Facebook: "facebook",
  Twitter: "twitter",
  TwitterName: "twitter_name",
  Instagram: "instagram",
  InstagramName: "instagram_name",
  Gravatar: "gravatar",
  Youtube: "youtube",
  Hulu: "hulu",
  Vimeo: "vimeo",
  Animoto: "animoto",
  Dailymotion: "dailymotion",
  Worldstarhiphop: "worldstarhiphop",
} as const;
export type SocialDeliveryType = (typeof SocialDeliveryType)[keyof typeof SocialDeliveryType] | (string & {});

export const socialDeliveryTypeSchema: EnumSchema<SocialDeliveryType> =
  s.enumOf<SocialDeliveryType>(SocialDeliveryType);
