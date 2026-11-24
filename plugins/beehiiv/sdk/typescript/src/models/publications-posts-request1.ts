import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentMergeStrategy1Schema, type ContentMergeStrategy1 } from "./content-merge-strategy1.js";
import {
  postEmailCaptureTypeOverride2Schema,
  type PostEmailCaptureTypeOverride2,
} from "./post-email-capture-type-override2.js";
import { postEmailSettings2Schema, type PostEmailSettings2 } from "./post-email-settings2.js";
import { postMetadata2Schema, type PostMetadata2 } from "./post-metadata2.js";
import { PostPublishStatus2, postPublishStatus2Schema } from "./post-publish-status2.js";
import { postRecipients2Schema, type PostRecipients2 } from "./post-recipients2.js";
import { postSocialShare2Schema, type PostSocialShare2 } from "./post-social-share2.js";
import { postWebSettings2Schema, type PostWebSettings2 } from "./post-web-settings2.js";
import { block17Schema, type Block17 } from "./unions/block17.js";

export type PublicationsPostsRequest1 = {
  /**
   * Controls how provided `blocks` interact with the post's existing content. Defaults to
   * `replace`. Use `append_to_template` to preserve template header blocks when updating posts that
   * were created from a template.
   */
  contentMergeStrategy?: ContentMergeStrategy1;
  /**
   * The structured content blocks for the post. How these interact with existing content depends on
   * `content_merge_strategy` (default: full replacement). Supports block types such as paragraph,
   * image, heading, button, html, table, list, columns, and more. Cannot be provided together with
   * `body_content`.
   */
  blocks?: Block17[];
  /**
   * Raw HTML to replace the post's current content. The HTML is wrapped in an `htmlSnippet` block
   * internally. Note that `<style>` and `<link>` tags are removed during sanitization — use inline
   * styles for all visual styling. Cannot be provided together with `blocks`.
   */
  bodyContent?: string;
  /** The title of the post. */
  title?: string;
  /** The subtitle of the post. */
  subtitle?: string;
  /**
   * The time at which the post will be published. Cannot be updated after the post has already been
   * sent.
   */
  scheduledAt?: Date;
  /** If true, custom link tracking will be enabled for this post. */
  customLinkTrackingEnabled?: boolean;
  /** The email capture type to use for this post. */
  emailCaptureTypeOverride?: PostEmailCaptureTypeOverride2;
  /**
   * A display date that overrides the scheduled_at date shown in the email. Does not affect the
   * actual publish date.
   */
  overrideScheduledAt?: Date;
  /** The social share type to use for this post. */
  socialShare?: PostSocialShare2;
  /** The URL of the thumbnail image to use for the post. */
  thumbnailImageUrl?: string;
  /**
   * The email settings to use for this post. Only the provided fields within this object will be
   * updated.
   */
  emailSettings?: PostEmailSettings2;
  /**
   * The web settings to use for this post. Only the provided fields within this object will be
   * updated.
   */
  webSettings?: PostWebSettings2;
  /**
   * The SEO metadata to use for this post. Only the provided fields within this object will be
   * updated.
   */
  seoSettings?: PostMetadata2;
  /**
   * Transition the post's status. Use `confirmed` to schedule or publish a draft post. Only the
   * `draft` → `confirmed` transition is supported — a confirmed post cannot be moved back to
   * `draft`.
   *
   * @default PostPublishStatus2.Draft
   */
  status?: PostPublishStatus2;
  /**
   * The content tags for this post. When provided, this replaces all existing content tags on the
   * post.
   */
  contentTags?: string[];
  /**
   * Custom email headers for this post. Merges with publication-level headers at send time.
   * System-managed headers (e.g. List-Unsubscribe, X-SMTPAPI) cannot be overridden.
   */
  headers?: Record<string, string>;
  /**
   * The prefixed IDs of the guest authors to associate with this post. Guest authors must belong to
   * the publication. When provided, replaces all existing guest authors on the post.
   */
  guestAuthorIds?: string[];
  /**
   * The prefixed IDs of the team members to associate with this post as authors. Team authors must
   * have access to the publication. When provided, replaces all existing team authors on the post.
   */
  teamAuthorIds?: string[];
  /**
   * The recipients for this post. When provided, replaces all existing web and email audience
   * targets with the specified values. If omitted, existing targets are unchanged.
   */
  recipients?: PostRecipients2;
  /**
   * The prefixed ID of the newsletter list to associate with this post. When provided, updates the
   * newsletter list association. Pass null to remove the association.
   */
  newsletterListId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsPostsRequest1Schema: Schema<PublicationsPostsRequest1> =
  s.object<PublicationsPostsRequest1>(
    {
      contentMergeStrategy: s.optional(s.lazy(() => contentMergeStrategy1Schema)),
      blocks: s.optional(s.array(s.lazy(() => block17Schema))),
      bodyContent: s.optional(s.string()),
      title: s.optional(s.string()),
      subtitle: s.optional(s.string()),
      scheduledAt: s.optional(s.dateTime()),
      customLinkTrackingEnabled: s.optional(s.boolean()),
      emailCaptureTypeOverride: s.optional(s.lazy(() => postEmailCaptureTypeOverride2Schema)),
      overrideScheduledAt: s.optional(s.dateTime()),
      socialShare: s.optional(s.lazy(() => postSocialShare2Schema)),
      thumbnailImageUrl: s.optional(s.string()),
      emailSettings: s.optional(s.lazy(() => postEmailSettings2Schema)),
      webSettings: s.optional(s.lazy(() => postWebSettings2Schema)),
      seoSettings: s.optional(s.lazy(() => postMetadata2Schema)),
      status: s.defaulted(postPublishStatus2Schema, PostPublishStatus2.Draft),
      contentTags: s.optional(s.array(s.string())),
      headers: s.optional(s.record(s.string(), s.string())),
      guestAuthorIds: s.optional(s.array(s.string())),
      teamAuthorIds: s.optional(s.array(s.string())),
      recipients: s.optional(s.lazy(() => postRecipients2Schema)),
      newsletterListId: s.optional(s.string()),
      _keysMap: {
        contentMergeStrategy: "content_merge_strategy",
        bodyContent: "body_content",
        scheduledAt: "scheduled_at",
        customLinkTrackingEnabled: "custom_link_tracking_enabled",
        emailCaptureTypeOverride: "email_capture_type_override",
        overrideScheduledAt: "override_scheduled_at",
        socialShare: "social_share",
        thumbnailImageUrl: "thumbnail_image_url",
        emailSettings: "email_settings",
        webSettings: "web_settings",
        seoSettings: "seo_settings",
        contentTags: "content_tags",
        guestAuthorIds: "guest_author_ids",
        teamAuthorIds: "team_author_ids",
        newsletterListId: "newsletter_list_id",
      },
    },
    { additionalProperties: s.json() },
  );
