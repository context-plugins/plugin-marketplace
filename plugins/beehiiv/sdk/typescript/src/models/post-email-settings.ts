import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PostEmailSettings = {
  fromAddress?: string;
  customLiveUrl?: string;
  displayTitleInEmail?: boolean;
  displayBylineInEmail?: boolean;
  displaySubtitleInEmail?: boolean;
  emailHeaderEngagementButtons?: string;
  emailHeaderSocialShare?: string;
  emailPreviewText?: string;
  emailSubjectLine?: string;
  /**
   * Email address to set as Reply-To. Must be a verified reply-to address owned by the publication.
   * Returns 422 if not found.
   */
  replyToAddress?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postEmailSettingsSchema: Schema<PostEmailSettings> = s.object<PostEmailSettings>(
  {
    fromAddress: s.optional(s.string()),
    customLiveUrl: s.optional(s.string()),
    displayTitleInEmail: s.optional(s.boolean()),
    displayBylineInEmail: s.optional(s.boolean()),
    displaySubtitleInEmail: s.optional(s.boolean()),
    emailHeaderEngagementButtons: s.optional(s.string()),
    emailHeaderSocialShare: s.optional(s.string()),
    emailPreviewText: s.optional(s.string()),
    emailSubjectLine: s.optional(s.string()),
    replyToAddress: s.optional(s.string()),
    _keysMap: {
      fromAddress: "from_address",
      customLiveUrl: "custom_live_url",
      displayTitleInEmail: "display_title_in_email",
      displayBylineInEmail: "display_byline_in_email",
      displaySubtitleInEmail: "display_subtitle_in_email",
      emailHeaderEngagementButtons: "email_header_engagement_buttons",
      emailHeaderSocialShare: "email_header_social_share",
      emailPreviewText: "email_preview_text",
      emailSubjectLine: "email_subject_line",
      replyToAddress: "reply_to_address",
    },
  },
  { additionalProperties: s.json() },
);
