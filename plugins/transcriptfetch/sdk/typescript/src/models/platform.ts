import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where the rows came from: the `platform` field on search, the platform detected from the URL on
 * channel and playlist.
 */
export const Platform = {
  Youtube: "youtube",
  Tiktok: "tiktok",
  Instagram: "instagram",
  Spotify: "spotify",
  Apple: "apple",
  Rss: "rss",
} as const;
export type Platform = (typeof Platform)[keyof typeof Platform] | (string & {});

export const platformSchema: EnumSchema<Platform> = s.enumOf<Platform>(Platform);
