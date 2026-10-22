import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This determines whether this is a Social Feed post or a regular announcement. */
export const Channel1 = {
  Main: "MAIN",
  SocialFeed: "SOCIAL_FEED",
} as const;
export type Channel1 = (typeof Channel1)[keyof typeof Channel1] | (string & {});

export const channel1Schema: EnumSchema<Channel1> = s.enumOf<Channel1>(Channel1);
