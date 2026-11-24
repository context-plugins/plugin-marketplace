using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;
using Beehiiv.Models.OneOf;

namespace Beehiiv.Models;

public record PublicationsPostsRequest
{
    /// <summary>
    /// The structured content blocks that make up the post. Supports block types such as paragraph, image, heading, button, html, table, list, columns, and more. You can embed raw HTML snippets within blocks using the <c>html</c> block type. Either this field OR the <c>body_content</c> field must be provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocks")]
    public IReadOnlyList<Block17>? Blocks { get; init; }

    /// <summary>
    /// The content of the post as a single raw HTML string. The HTML is wrapped in an <c>htmlSnippet</c> block internally. Note that <c>&lt;style&gt;</c> and <c>&lt;link&gt;</c> tags are removed during sanitization — use inline styles for all visual styling. Either this field OR the <c>blocks</c> field must be provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body_content")]
    public string? BodyContent { get; init; }

    /// <summary>
    /// The title of the post.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// The subtitle of the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtitle")]
    public string? Subtitle { get; init; }

    /// <summary>
    /// The ID of the template to use for the post. If not provided, the default template will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("post_template_id")]
    public string? PostTemplateId { get; init; }

    /// <summary>
    /// The status of the post. If not provided, the default (<c>draft</c>) value will be used and the post will not be scheduled or published. Explicitly pass <c>confirmed</c> to have the post publish immediately (if no <c>scheduled_at</c> is provided) or at the <c>scheduled_at</c> time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public PostPublishStatus1? Status { get; init; } = PostPublishStatus1.Draft;

    /// <summary>
    /// The time in which the post will be published. If not provided, the post will be published immediately unless <c>status</c> is set to <c>draft</c>. A draft post cannot be scheduled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduled_at")]
    public DateTimeOffset? ScheduledAt { get; init; }

    /// <summary>
    /// If true, custom link tracking will be enabled for this post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_link_tracking_enabled")]
    public bool? CustomLinkTrackingEnabled { get; init; }

    /// <summary>
    /// The email capture type to use for this post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_capture_type_override")]
    public PostEmailCaptureTypeOverride1? EmailCaptureTypeOverride { get; init; }

    /// <summary>
    /// If you wish to display a date other than the scheduled_at date in the email, you can provide a date here. This will not affect the actual publish date of the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("override_scheduled_at")]
    public DateTimeOffset? OverrideScheduledAt { get; init; }

    /// <summary>
    /// The social share type to use for this post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("social_share")]
    public PostSocialShare1? SocialShare { get; init; }

    /// <summary>
    /// The URL of the thumbnail image to use for the post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail_image_url")]
    public string? ThumbnailImageUrl { get; init; }

    /// <summary>
    /// The recipients to use for this post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipients")]
    public PostRecipients1? Recipients { get; init; }

    /// <summary>
    /// The email settings to use for this post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_settings")]
    public PostEmailSettings1? EmailSettings { get; init; }

    /// <summary>
    /// The web settings to use for this post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("web_settings")]
    public PostWebSettings1? WebSettings { get; init; }

    /// <summary>
    /// The metadata to use for this post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seo_settings")]
    public PostMetadata1? SeoSettings { get; init; }

    /// <summary>
    /// The content tags to use for this post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_tags")]
    public IReadOnlyList<string>? ContentTags { get; init; }

    /// <summary>
    /// The prefixed IDs of the guest authors to associate with this post. Guest authors must belong to the publication. Obtain IDs from the List Authors endpoint. When provided, replaces all existing guest authors on the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("guest_author_ids")]
    public IReadOnlyList<string>? GuestAuthorIds { get; init; }

    /// <summary>
    /// The prefixed IDs of the team members to associate with this post as authors. Team authors must have access to the publication. Note the List Authors endpoint only returns team members who already have a byline on a published post in this publication, so it will not surface IDs for a team member's first assignment. When provided, replaces all existing team authors on the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team_author_ids")]
    public IReadOnlyList<string>? TeamAuthorIds { get; init; }

    /// <summary>
    /// The headers to use for this post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public IReadOnlyDictionary<string, string>? Headers { get; init; }

    /// <summary>
    /// The custom fields to use for this post. If not provided, the default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyDictionary<string, string>? CustomFields { get; init; }

    /// <summary>
    /// The prefixed ID of the newsletter list to associate with this post. When provided, the post will only be sent to subscribers of this list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newsletter_list_id")]
    public string? NewsletterListId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
