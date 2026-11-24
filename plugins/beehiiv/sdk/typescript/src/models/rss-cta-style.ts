import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The style of the call to action. */
export const RssCtaStyle = {
  CtaButton: "CTA button",
  CtaLink: "CTA link",
  TitleAsLink: "Title as link",
  ThumbnailAsLink: "Thumbnail as link",
  TitleAndThumbnailAsLink: "Title and thumbnail as link",
} as const;
export type RssCtaStyle = (typeof RssCtaStyle)[keyof typeof RssCtaStyle] | (string & {});

export const rssCtaStyleSchema: EnumSchema<RssCtaStyle> = s.enumOf<RssCtaStyle>(RssCtaStyle);
