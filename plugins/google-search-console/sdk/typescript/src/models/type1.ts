import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The specific type of content in this sitemap. For example: `web`. */
export const Type1 = {
  Web: "WEB",
  Image: "IMAGE",
  Video: "VIDEO",
  News: "NEWS",
  Mobile: "MOBILE",
  AndroidApp: "ANDROID_APP",
  Pattern: "PATTERN",
  IosApp: "IOS_APP",
  DataFeedElement: "DATA_FEED_ELEMENT",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
