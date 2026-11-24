import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postAudienceSchema, type PostAudience } from "./post-audience.js";
import { postContentSchema, type PostContent } from "./post-content.js";
import { postPlatformSchema, type PostPlatform } from "./post-platform.js";
import { postRecipientsResponse1Schema, type PostRecipientsResponse1 } from "./post-recipients-response1.js";
import { postStatsSchema, type PostStats } from "./post-stats.js";
import { PostStatus, postStatusSchema } from "./post-status.js";

export type Post = {
  /** The prefixed post id */
  id: string;
  /** The subtitle displayed in web views */
  subtitle: string;
  /** The title displayed in web views */
  title: string;
  /** An array of author names */
  authors: string[];
  /** The time the post was created. Measured in seconds since the Unix epoch */
  created: number;
  /**
   * The status of the post.<br>`draft` - not been scheduled.<br>`confirmed` - The post will be
   * active after the `scheduled_at`.<br>`archived` - The post is no longer active.
   *
   * @default PostStatus.Draft
   */
  status?: PostStatus;
  /** The time the post was set to be published. Measured in seconds since the Unix epoch */
  publishDate?: number;
  /** The time displayed in place of the `publish_date`. Measured in seconds since the Unix epoch */
  displayedDate?: number;
  /** A flag to indicate if a split test was done. Only applicable to email posts. */
  splitTested: boolean;
  /**
   * The email subject line. In cases of A/B Testing, this will be adjusted to the winning subject
   * line.
   */
  subjectLine: string;
  /** The email preview text */
  previewText: string;
  /** The web slug where this post can be accessed. */
  slug: string;
  /** The URL of the thumbnail. Defaults to the Publication logo if not set. */
  thumbnailUrl: string;
  /**
   * The full URL where this post can be accessed on the web. Only applicable if the platform is
   * `web` or `both`.
   */
  webUrl: string;
  /**
   * A stable URL to the post's email preview in the beehiiv app. Renders the current post content
   * on every visit. Requires a beehiiv session with access to the publication. The same URL is
   * returned on every create, update, or show. Supports optional query parameters to preview as a
   * specific audience: `platform` (`email` default, or `web`), `subscriber_type` (`free` default,
   * or `premium` - requires `tier_ids[]`), `tier_ids[]` (one or more tier ids, only used when
   * `subscriber_type=premium`), and `subscriber_id` (renders using that subscriber's real tier
   * memberships and takes precedence over `subscriber_type`/`tier_ids[]`).
   */
  previewUrl?: string;
  /**
   * The audience that the post is available to on the web. Only applicable if the platform is `web`
   * or `both`.
   */
  audience: PostAudience;
  /** The platform that the post is or will be published to. */
  platform: PostPlatform;
  /** All content tags that were associated with the post. */
  contentTags: string[];
  /** Meta tag description for the post, called SEO Description in the admin UI */
  metaDefaultDescription?: string;
  /** meta tag title for the post, called SEO Title in the admin UI */
  metaDefaultTitle?: string;
  /**
   * The prefixed ID of the newsletter list this post is associated with. When set, the post targets
   * only subscribers of this newsletter list.
   */
  newsletterListId?: string;
  /** A flag to indicate if the post is hidden from the website feed. @default false */
  hiddenFromFeed?: boolean;
  /** A flag to indicate if the post enforces gated content for non-subscribers. @default false */
  enforceGatedContent?: boolean;
  /** A flag to indicate if popup email capture is enabled for this post. @default false */
  emailCapturePopup?: boolean;
  /** The targeting configuration for this post. */
  recipients?: PostRecipientsResponse1;
  /**
   * Estimated (draft/confirmed) or actual (sent) number of email subscribers targeted by this post.
   */
  recipientCount?: number;
  /** Custom email headers set on this post. */
  headers?: Record<string, string>;
  /** The from address for this post. If not set, falls back to the publication default. */
  fromAddress?: string;
  /** The reply-to address for this post. If not set, falls back to the publication default. */
  replyToAddress?: string;
  /**
   * Optional html content for a post. Retrievable by including any of `expand: [free_web_content,
   * free_email_content, free_rss_content, premium_web_content, premium_email_content]` in the post
   * request body.
   *
   * **Note:** Generating HTML is slow. We recommend only requesting the HTML versions you need at
   * the time.
   */
  content?: PostContent;
  /**
   * Optional list of stats for a post. Retrievable by including `expand: [stats]` in the post
   * request body. <br><br> **Note:** If a timeout occurs while aggregating stats, subsequent
   * requests may return consolidated click metrics rather than individual raw click metrics.
   */
  stats?: PostStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postSchema: Schema<Post> = s.object<Post>(
  {
    id: s.string(),
    subtitle: s.string(),
    title: s.string(),
    authors: s.array(s.string()),
    created: s.int(),
    status: s.defaulted(postStatusSchema, PostStatus.Draft),
    publishDate: s.optional(s.int()),
    displayedDate: s.optional(s.int()),
    splitTested: s.boolean(),
    subjectLine: s.string(),
    previewText: s.string(),
    slug: s.string(),
    thumbnailUrl: s.string(),
    webUrl: s.string(),
    previewUrl: s.optional(s.string()),
    audience: postAudienceSchema,
    platform: postPlatformSchema,
    contentTags: s.array(s.string()),
    metaDefaultDescription: s.optional(s.string()),
    metaDefaultTitle: s.optional(s.string()),
    newsletterListId: s.optional(s.string()),
    hiddenFromFeed: s.defaulted(s.boolean(), false),
    enforceGatedContent: s.defaulted(s.boolean(), false),
    emailCapturePopup: s.defaulted(s.boolean(), false),
    recipients: s.optional(s.lazy(() => postRecipientsResponse1Schema)),
    recipientCount: s.optional(s.int()),
    headers: s.optional(s.record(s.string(), s.string())),
    fromAddress: s.optional(s.string()),
    replyToAddress: s.optional(s.string()),
    content: s.optional(s.lazy(() => postContentSchema)),
    stats: s.optional(s.lazy(() => postStatsSchema)),
    _keysMap: {
      publishDate: "publish_date",
      displayedDate: "displayed_date",
      splitTested: "split_tested",
      subjectLine: "subject_line",
      previewText: "preview_text",
      thumbnailUrl: "thumbnail_url",
      webUrl: "web_url",
      previewUrl: "preview_url",
      contentTags: "content_tags",
      metaDefaultDescription: "meta_default_description",
      metaDefaultTitle: "meta_default_title",
      newsletterListId: "newsletter_list_id",
      hiddenFromFeed: "hidden_from_feed",
      enforceGatedContent: "enforce_gated_content",
      emailCapturePopup: "email_capture_popup",
      recipientCount: "recipient_count",
      fromAddress: "from_address",
      replyToAddress: "reply_to_address",
    },
  },
  { additionalProperties: s.json() },
);
