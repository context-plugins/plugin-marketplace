import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PostWebSettings = {
  displaySubtitleOnWeb?: boolean;
  displayThumbnailOnWeb?: boolean;
  displayTitleOnWeb?: boolean;
  hideFromFeed?: boolean;
  /** The prefixed ID of the price. */
  paywallBreakPriceId?: string;
  /** The prefixed ID of the paywall. */
  paywallId?: string;
  slug?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postWebSettingsSchema: Schema<PostWebSettings> = s.object<PostWebSettings>(
  {
    displaySubtitleOnWeb: s.optional(s.boolean()),
    displayThumbnailOnWeb: s.optional(s.boolean()),
    displayTitleOnWeb: s.optional(s.boolean()),
    hideFromFeed: s.optional(s.boolean()),
    paywallBreakPriceId: s.optional(s.string()),
    paywallId: s.optional(s.string()),
    slug: s.optional(s.string()),
    _keysMap: {
      displaySubtitleOnWeb: "display_subtitle_on_web",
      displayThumbnailOnWeb: "display_thumbnail_on_web",
      displayTitleOnWeb: "display_title_on_web",
      hideFromFeed: "hide_from_feed",
      paywallBreakPriceId: "paywall_break_price_id",
      paywallId: "paywall_id",
    },
  },
  { additionalProperties: s.json() },
);
