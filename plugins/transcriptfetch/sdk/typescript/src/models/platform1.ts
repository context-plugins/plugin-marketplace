import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where to search: youtube (default), tiktok, instagram, spotify, apple, or rss. Every result's url
 * is accepted by the transcript and batch endpoints as-is. rss searches the open podcast index via
 * Apple's directory and returns episode audio (enclosure) URLs.
 */
export const Platform1 = {
  Youtube: "youtube",
  Tiktok: "tiktok",
  Instagram: "instagram",
  Spotify: "spotify",
  Apple: "apple",
  Rss: "rss",
} as const;
export type Platform1 = (typeof Platform1)[keyof typeof Platform1] | (string & {});

export const platform1Schema: EnumSchema<Platform1> = s.enumOf<Platform1>(Platform1);
