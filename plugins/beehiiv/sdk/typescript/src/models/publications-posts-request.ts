import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  postEmailCaptureTypeOverride1Schema,
  type PostEmailCaptureTypeOverride1,
} from "./post-email-capture-type-override1.js";
import { postEmailSettings1Schema, type PostEmailSettings1 } from "./post-email-settings1.js";
import { postMetadata1Schema, type PostMetadata1 } from "./post-metadata1.js";
import { PostPublishStatus1, postPublishStatus1Schema } from "./post-publish-status1.js";
import { postRecipients1Schema, type PostRecipients1 } from "./post-recipients1.js";
import { postSocialShare1Schema, type PostSocialShare1 } from "./post-social-share1.js";
import { postWebSettings1Schema, type PostWebSettings1 } from "./post-web-settings1.js";
import { block17Schema, type Block17 } from "./unions/block17.js";

export type PublicationsPostsRequest = {
  /**
   * The structured content blocks that make up the post. Supports block types such as paragraph,
   * image, heading, button, html, table, list, columns, and more. You can embed raw HTML snippets
   * within blocks using the `html` block type. Either this field OR the `body_content` field must
   * be provided.
   */
  blocks?: Block17[];
  /**
   * The content of the post as a single raw HTML string. The HTML is wrapped in an `htmlSnippet`
   * block internally. Note that `<style>` and `<link>` tags are removed during sanitization — use
   * inline styles for all visual styling. Either this field OR the `blocks` field must be provided.
   */
  bodyContent?: string;
  /** The title of the post. */
  title: string;
  /** The subtitle of the post. */
  subtitle?: string;
  /**
   * The ID of the template to use for the post. If not provided, the default template will be used.
   */
  postTemplateId?: string;
  /**
   * The status of the post. If not provided, the default (`draft`) value will be used and the post
   * will not be scheduled or published. Explicitly pass `confirmed` to have the post publish
   * immediately (if no `scheduled_at` is provided) or at the `scheduled_at` time.
   *
   * @default PostPublishStatus1.Draft
   */
  status?: PostPublishStatus1;
  /**
   * The time in which the post will be published. If not provided, the post will be published
   * immediately unless `status` is set to `draft`. A draft post cannot be scheduled.
   */
  scheduledAt?: Date;
  /**
   * If true, custom link tracking will be enabled for this post. If not provided, the default value
   * will be used.
   */
  customLinkTrackingEnabled?: boolean;
  /**
   * The email capture type to use for this post. If not provided, the default value will be used.
   */
  emailCaptureTypeOverride?: PostEmailCaptureTypeOverride1;
  /**
   * If you wish to display a date other than the scheduled_at date in the email, you can provide a
   * date here. This will not affect the actual publish date of the post.
   */
  overrideScheduledAt?: Date;
  /**
   * The social share type to use for this post. If not provided, the default value will be used.
   */
  socialShare?: PostSocialShare1;
  /**
   * The URL of the thumbnail image to use for the post. If not provided, the default value will be
   * used.
   */
  thumbnailImageUrl?: string;
  /** The recipients to use for this post. If not provided, the default value will be used. */
  recipients?: PostRecipients1;
  /** The email settings to use for this post. If not provided, the default value will be used. */
  emailSettings?: PostEmailSettings1;
  /** The web settings to use for this post. If not provided, the default value will be used. */
  webSettings?: PostWebSettings1;
  /** The metadata to use for this post. If not provided, the default value will be used. */
  seoSettings?: PostMetadata1;
  /** The content tags to use for this post. If not provided, the default value will be used. */
  contentTags?: string[];
  /**
   * The prefixed IDs of the guest authors to associate with this post. Guest authors must belong to
   * the publication. Obtain IDs from the List Authors endpoint. When provided, replaces all
   * existing guest authors on the post.
   */
  guestAuthorIds?: string[];
  /**
   * The prefixed IDs of the team members to associate with this post as authors. Team authors must
   * have access to the publication. Note the List Authors endpoint only returns team members who
   * already have a byline on a published post in this publication, so it will not surface IDs for a
   * team member's first assignment. When provided, replaces all existing team authors on the post.
   */
  teamAuthorIds?: string[];
  /** The headers to use for this post. If not provided, the default value will be used. */
  headers?: Record<string, string>;
  /** The custom fields to use for this post. If not provided, the default value will be used. */
  customFields?: Record<string, string>;
  /**
   * The prefixed ID of the newsletter list to associate with this post. When provided, the post
   * will only be sent to subscribers of this list.
   */
  newsletterListId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsPostsRequestSchema: Schema<PublicationsPostsRequest> =
  s.object<PublicationsPostsRequest>(
    {
      blocks: s.optional(s.array(s.lazy(() => block17Schema))),
      bodyContent: s.optional(s.string()),
      title: s.string(),
      subtitle: s.optional(s.string()),
      postTemplateId: s.optional(s.string()),
      status: s.defaulted(postPublishStatus1Schema, PostPublishStatus1.Draft),
      scheduledAt: s.optional(s.dateTime()),
      customLinkTrackingEnabled: s.optional(s.boolean()),
      emailCaptureTypeOverride: s.optional(s.lazy(() => postEmailCaptureTypeOverride1Schema)),
      overrideScheduledAt: s.optional(s.dateTime()),
      socialShare: s.optional(s.lazy(() => postSocialShare1Schema)),
      thumbnailImageUrl: s.optional(s.string()),
      recipients: s.optional(s.lazy(() => postRecipients1Schema)),
      emailSettings: s.optional(s.lazy(() => postEmailSettings1Schema)),
      webSettings: s.optional(s.lazy(() => postWebSettings1Schema)),
      seoSettings: s.optional(s.lazy(() => postMetadata1Schema)),
      contentTags: s.optional(s.array(s.string())),
      guestAuthorIds: s.optional(s.array(s.string())),
      teamAuthorIds: s.optional(s.array(s.string())),
      headers: s.optional(s.record(s.string(), s.string())),
      customFields: s.optional(s.record(s.string(), s.string())),
      newsletterListId: s.optional(s.string()),
      _keysMap: {
        bodyContent: "body_content",
        postTemplateId: "post_template_id",
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
        customFields: "custom_fields",
        newsletterListId: "newsletter_list_id",
      },
    },
    { additionalProperties: s.json() },
  );
