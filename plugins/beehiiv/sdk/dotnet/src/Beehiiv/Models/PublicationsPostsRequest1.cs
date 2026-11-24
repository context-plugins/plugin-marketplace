using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;
using Beehiiv.Models.OneOf;

namespace Beehiiv.Models;

public record PublicationsPostsRequest1
{
    /// <summary>
    /// Controls how provided <c>blocks</c> interact with the post's existing content. Defaults to <c>replace</c>. Use <c>append_to_template</c> to preserve template header blocks when updating posts that were created from a template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_merge_strategy")]
    public ContentMergeStrategy1? ContentMergeStrategy { get; init; }

    /// <summary>
    /// The structured content blocks for the post. How these interact with existing content depends on <c>content_merge_strategy</c> (default: full replacement). Supports block types such as paragraph, image, heading, button, html, table, list, columns, and more. Cannot be provided together with <c>body_content</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocks")]
    public IReadOnlyList<Block17>? Blocks { get; init; }

    /// <summary>
    /// Raw HTML to replace the post's current content. The HTML is wrapped in an <c>htmlSnippet</c> block internally. Note that <c>&lt;style&gt;</c> and <c>&lt;link&gt;</c> tags are removed during sanitization — use inline styles for all visual styling. Cannot be provided together with <c>blocks</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body_content")]
    public string? BodyContent { get; init; }

    /// <summary>
    /// The title of the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// The subtitle of the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtitle")]
    public string? Subtitle { get; init; }

    /// <summary>
    /// The time at which the post will be published. Cannot be updated after the post has already been sent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduled_at")]
    public DateTimeOffset? ScheduledAt { get; init; }

    /// <summary>
    /// If true, custom link tracking will be enabled for this post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_link_tracking_enabled")]
    public bool? CustomLinkTrackingEnabled { get; init; }

    /// <summary>
    /// The email capture type to use for this post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_capture_type_override")]
    public PostEmailCaptureTypeOverride2? EmailCaptureTypeOverride { get; init; }

    /// <summary>
    /// A display date that overrides the scheduled_at date shown in the email. Does not affect the actual publish date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("override_scheduled_at")]
    public DateTimeOffset? OverrideScheduledAt { get; init; }

    /// <summary>
    /// The social share type to use for this post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("social_share")]
    public PostSocialShare2? SocialShare { get; init; }

    /// <summary>
    /// The URL of the thumbnail image to use for the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail_image_url")]
    public string? ThumbnailImageUrl { get; init; }

    /// <summary>
    /// The email settings to use for this post. Only the provided fields within this object will be updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_settings")]
    public PostEmailSettings2? EmailSettings { get; init; }

    /// <summary>
    /// The web settings to use for this post. Only the provided fields within this object will be updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("web_settings")]
    public PostWebSettings2? WebSettings { get; init; }

    /// <summary>
    /// The SEO metadata to use for this post. Only the provided fields within this object will be updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seo_settings")]
    public PostMetadata2? SeoSettings { get; init; }

    /// <summary>
    /// Transition the post's status. Use <c>confirmed</c> to schedule or publish a draft post. Only the <c>draft</c> → <c>confirmed</c> transition is supported — a confirmed post cannot be moved back to <c>draft</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public PostPublishStatus2? Status { get; init; } = PostPublishStatus2.Draft;

    /// <summary>
    /// The content tags for this post. When provided, this replaces all existing content tags on the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_tags")]
    public IReadOnlyList<string>? ContentTags { get; init; }

    /// <summary>
    /// Custom email headers for this post. Merges with publication-level headers at send time. System-managed headers (e.g. List-Unsubscribe, X-SMTPAPI) cannot be overridden.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public IReadOnlyDictionary<string, string>? Headers { get; init; }

    /// <summary>
    /// The prefixed IDs of the guest authors to associate with this post. Guest authors must belong to the publication. When provided, replaces all existing guest authors on the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("guest_author_ids")]
    public IReadOnlyList<string>? GuestAuthorIds { get; init; }

    /// <summary>
    /// The prefixed IDs of the team members to associate with this post as authors. Team authors must have access to the publication. When provided, replaces all existing team authors on the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team_author_ids")]
    public IReadOnlyList<string>? TeamAuthorIds { get; init; }

    /// <summary>
    /// The recipients for this post. When provided, replaces all existing web and email audience targets with the specified values. If omitted, existing targets are unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipients")]
    public PostRecipients2? Recipients { get; init; }

    /// <summary>
    /// The prefixed ID of the newsletter list to associate with this post. When provided, updates the newsletter list association. Pass null to remove the association.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newsletter_list_id")]
    public string? NewsletterListId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
