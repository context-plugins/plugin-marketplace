import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postStatusSchema, type PostStatus } from "./post-status.js";

export type PostData = {
  /**
   * The audience that the post is available to on the web. Only applicable if the platform is `web`
   * or `both`.
   */
  audience: string;
  /** An array of author names */
  authors: string[];
  /** All content tags that were associated with the post. */
  contentTags: string[];
  /** The time the post was created. Measured in seconds since the Unix epoch */
  created: number;
  /** The time displayed in place of the `publish_date`. Measured in seconds since the Unix epoch */
  displayedDate?: number;
  /** The prefixed post id */
  id: string;
  /** The email preview text */
  previewText: string;
  /** The time the post was set to be published. Measured in seconds since the Unix epoch */
  publishDate?: number;
  /** The web slug where this post can be accessed. */
  slug: string;
  /** A flag to indicate if a split test was done. Only applicable to email posts. */
  splitTested: boolean;
  /**
   * The status of the post.<br>`draft` - not been scheduled.<br>`confirmed` - The post will be
   * active after the `scheduled_at`.<br>`archived` - The post is no longer active.
   */
  status: PostStatus;
  /**
   * The email subject line. In cases of A/B Testing, this will be adjusted to the winning subject
   * line.
   */
  subjectLine: string;
  /** The subtitle displayed in web views */
  subtitle: string;
  /** The URL of the thumbnail. Defaults to the Publication logo if not set. */
  thumbnailUrl: string;
  /** The title displayed in web views */
  title: string;
  /**
   * The full URL where this post can be accessed on the web. Only applicable if the platform is
   * `web` or `both`.
   */
  webUrl?: string;
  /** The platform that the post is or will be published to. */
  platform: string;
  /** Meta tag description for the post, called SEO Description in the admin UI */
  metaDefaultDescription?: string;
  /** Meta tag title for the post, called SEO Title in the admin UI */
  metaDefaultTitle?: string;
  /** A flag to indicate if the post is hidden from the website feed. */
  hiddenFromFeed: boolean;
  /** A flag to indicate if the post enforces gated content for non-subscribers. */
  enforceGatedContent: boolean;
  /** A flag to indicate if popup email capture is enabled for this post. */
  emailCapturePopup: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postDataSchema: Schema<PostData> = s.object<PostData>(
  {
    audience: s.string(),
    authors: s.array(s.string()),
    contentTags: s.array(s.string()),
    created: s.int(),
    displayedDate: s.optional(s.int()),
    id: s.string(),
    previewText: s.string(),
    publishDate: s.optional(s.int()),
    slug: s.string(),
    splitTested: s.boolean(),
    status: postStatusSchema,
    subjectLine: s.string(),
    subtitle: s.string(),
    thumbnailUrl: s.string(),
    title: s.string(),
    webUrl: s.optional(s.string()),
    platform: s.string(),
    metaDefaultDescription: s.optional(s.string()),
    metaDefaultTitle: s.optional(s.string()),
    hiddenFromFeed: s.boolean(),
    enforceGatedContent: s.boolean(),
    emailCapturePopup: s.boolean(),
    _keysMap: {
      contentTags: "content_tags",
      displayedDate: "displayed_date",
      previewText: "preview_text",
      publishDate: "publish_date",
      splitTested: "split_tested",
      subjectLine: "subject_line",
      thumbnailUrl: "thumbnail_url",
      webUrl: "web_url",
      metaDefaultDescription: "meta_default_description",
      metaDefaultTitle: "meta_default_title",
      hiddenFromFeed: "hidden_from_feed",
      enforceGatedContent: "enforce_gated_content",
      emailCapturePopup: "email_capture_popup",
    },
  },
  { additionalProperties: s.json() },
);
