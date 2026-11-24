import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rssBlockLayoutSchema, type RssBlockLayout } from "./rss-block-layout.js";
import { rssCtaAlignmentSchema, type RssCtaAlignment } from "./rss-cta-alignment.js";
import { rssCtaStyleSchema, type RssCtaStyle } from "./rss-cta-style.js";
import { rssSelectionMode1Schema, type RssSelectionMode1 } from "./rss-selection-mode1.js";
import { rssThumbnailPositionSchema, type RssThumbnailPosition } from "./rss-thumbnail-position.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type EmbeddableBlocks4 = {
  /** Discriminator value: rss @default "rss" */
  type?: "rss";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The ID of the external RSS feed. */
  externalRssFeedId?: string;
  /** The URL of the RSS feed. */
  rssFeedUrl?: string;
  /** The layout of the articles from the feed. */
  articleLayout?: RssBlockLayout;
  /** How to select feed articles, by count or time window. */
  selectionMode?: RssSelectionMode1;
  /** Trailing window in hours when selectionMode is time. */
  timeWindowHours?: number;
  /** The number of articles to show from the feed. */
  articlesToShow?: number;
  /** Whether to show a call to action. */
  showCta?: boolean;
  /** The text of the call to action. Applicable if ctaStyle is button or link. */
  ctaText?: string;
  /** The style of the call to action. */
  ctaStyle?: RssCtaStyle;
  /** The alignment of the call to action. */
  ctaAlignment?: RssCtaAlignment;
  /** Whether or not to refresh the contents from the RSS feed before sending out the email. */
  refreshOnSend?: boolean;
  /** Whether to show the article title. */
  showArticleTitle?: boolean;
  /** Whether to show the article thumbnail. */
  showArticleThumbnail?: boolean;
  /** The position of the thumbnail. */
  thumbnailPosition?: RssThumbnailPosition;
  /** Whether to show the author. */
  showAuthor?: boolean;
  /** Whether to show the date the article was published */
  showPublishedDate?: boolean;
  /** Whether to show the categories. */
  showCategories?: boolean;
  /** Whether to show the article description. */
  showDescription?: boolean;
  /** Whether to show the article content. */
  showContent?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const embeddableBlocks4Schema: Schema<EmbeddableBlocks4> = s.object<EmbeddableBlocks4>(
  {
    type: s.defaulted(s.literal("rss"), "rss"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    externalRssFeedId: s.optional(s.string()),
    rssFeedUrl: s.optional(s.string()),
    articleLayout: s.optional(s.lazy(() => rssBlockLayoutSchema)),
    selectionMode: s.optional(s.lazy(() => rssSelectionMode1Schema)),
    timeWindowHours: s.optional(s.int()),
    articlesToShow: s.optional(s.int()),
    showCta: s.optional(s.boolean()),
    ctaText: s.optional(s.string()),
    ctaStyle: s.optional(s.lazy(() => rssCtaStyleSchema)),
    ctaAlignment: s.optional(s.lazy(() => rssCtaAlignmentSchema)),
    refreshOnSend: s.optional(s.boolean()),
    showArticleTitle: s.optional(s.boolean()),
    showArticleThumbnail: s.optional(s.boolean()),
    thumbnailPosition: s.optional(s.lazy(() => rssThumbnailPositionSchema)),
    showAuthor: s.optional(s.boolean()),
    showPublishedDate: s.optional(s.boolean()),
    showCategories: s.optional(s.boolean()),
    showDescription: s.optional(s.boolean()),
    showContent: s.optional(s.boolean()),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
    },
  },
  { additionalProperties: s.json() },
);
