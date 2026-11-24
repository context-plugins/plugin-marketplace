import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The web settings to use for this post. Only the provided fields within this object will be
 * updated.
 */
export type PostWebSettings2 = {
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

export const postWebSettings2Schema: Schema<PostWebSettings2> = s.object<PostWebSettings2>(
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
