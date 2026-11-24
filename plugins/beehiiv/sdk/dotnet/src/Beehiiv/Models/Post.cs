using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record Post
{
    /// <summary>
    /// The prefixed post id
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The subtitle displayed in web views
    /// </summary>
    [JsonPropertyName("subtitle")]
    public required string Subtitle { get; init; }

    /// <summary>
    /// The title displayed in web views
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// An array of author names
    /// </summary>
    [JsonPropertyName("authors")]
    public required IReadOnlyList<string> Authors { get; init; }

    /// <summary>
    /// The time the post was created. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonPropertyName("created")]
    public required int Created { get; init; }

    /// <summary>
    /// The status of the post.&lt;br&gt;<c>draft</c> - not been scheduled.&lt;br&gt;<c>confirmed</c> - The post will be active after the <c>scheduled_at</c>.&lt;br&gt;<c>archived</c> - The post is no longer active.
    /// </summary>
    [JsonPropertyName("status")]
    public PostStatus Status { get; init; } = PostStatus.Draft;

    /// <summary>
    /// The time the post was set to be published. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publish_date")]
    public int? PublishDate { get; init; }

    /// <summary>
    /// The time displayed in place of the <c>publish_date</c>. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayed_date")]
    public int? DisplayedDate { get; init; }

    /// <summary>
    /// A flag to indicate if a split test was done. Only applicable to email posts.
    /// </summary>
    [JsonPropertyName("split_tested")]
    public required bool SplitTested { get; init; }

    /// <summary>
    /// The email subject line. In cases of A/B Testing, this will be adjusted to the winning subject line.
    /// </summary>
    [JsonPropertyName("subject_line")]
    public required string SubjectLine { get; init; }

    /// <summary>
    /// The email preview text
    /// </summary>
    [JsonPropertyName("preview_text")]
    public required string PreviewText { get; init; }

    /// <summary>
    /// The web slug where this post can be accessed.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// The URL of the thumbnail. Defaults to the Publication logo if not set.
    /// </summary>
    [JsonPropertyName("thumbnail_url")]
    public required string ThumbnailUrl { get; init; }

    /// <summary>
    /// The full URL where this post can be accessed on the web. Only applicable if the platform is <c>web</c> or <c>both</c>.
    /// </summary>
    [JsonPropertyName("web_url")]
    public required string WebUrl { get; init; }

    /// <summary>
    /// A stable URL to the post's email preview in the beehiiv app. Renders the current post content on every visit. Requires a beehiiv session with access to the publication. The same URL is returned on every create, update, or show. Supports optional query parameters to preview as a specific audience: <c>platform</c> (<c>email</c> default, or <c>web</c>), <c>subscriber_type</c> (<c>free</c> default, or <c>premium</c> - requires <c>tier_ids[]</c>), <c>tier_ids[]</c> (one or more tier ids, only used when <c>subscriber_type=premium</c>), and <c>subscriber_id</c> (renders using that subscriber's real tier memberships and takes precedence over <c>subscriber_type</c>/<c>tier_ids[]</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preview_url")]
    public string? PreviewUrl { get; init; }

    /// <summary>
    /// The audience that the post is available to on the web. Only applicable if the platform is <c>web</c> or <c>both</c>.
    /// </summary>
    [JsonPropertyName("audience")]
    public required PostAudience Audience { get; init; }

    /// <summary>
    /// The platform that the post is or will be published to.
    /// </summary>
    [JsonPropertyName("platform")]
    public required PostPlatform Platform { get; init; }

    /// <summary>
    /// All content tags that were associated with the post.
    /// </summary>
    [JsonPropertyName("content_tags")]
    public required IReadOnlyList<string> ContentTags { get; init; }

    /// <summary>
    /// Meta tag description for the post, called SEO Description in the admin UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta_default_description")]
    public string? MetaDefaultDescription { get; init; }

    /// <summary>
    /// meta tag title for the post, called SEO Title in the admin UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta_default_title")]
    public string? MetaDefaultTitle { get; init; }

    /// <summary>
    /// The prefixed ID of the newsletter list this post is associated with. When set, the post targets only subscribers of this newsletter list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newsletter_list_id")]
    public string? NewsletterListId { get; init; }

    /// <summary>
    /// A flag to indicate if the post is hidden from the website feed.
    /// </summary>
    [JsonPropertyName("hidden_from_feed")]
    public bool HiddenFromFeed { get; init; } = false;

    /// <summary>
    /// A flag to indicate if the post enforces gated content for non-subscribers.
    /// </summary>
    [JsonPropertyName("enforce_gated_content")]
    public bool EnforceGatedContent { get; init; } = false;

    /// <summary>
    /// A flag to indicate if popup email capture is enabled for this post.
    /// </summary>
    [JsonPropertyName("email_capture_popup")]
    public bool EmailCapturePopup { get; init; } = false;

    /// <summary>
    /// The targeting configuration for this post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipients")]
    public PostRecipientsResponse1? Recipients { get; init; }

    /// <summary>
    /// Estimated (draft/confirmed) or actual (sent) number of email subscribers targeted by this post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipient_count")]
    public int? RecipientCount { get; init; }

    /// <summary>
    /// Custom email headers set on this post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public IReadOnlyDictionary<string, string>? Headers { get; init; }

    /// <summary>
    /// The from address for this post. If not set, falls back to the publication default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from_address")]
    public string? FromAddress { get; init; }

    /// <summary>
    /// The reply-to address for this post. If not set, falls back to the publication default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reply_to_address")]
    public string? ReplyToAddress { get; init; }

    /// <summary>
    /// Optional html content for a post. Retrievable by including any of <c>expand: [free_web_content, free_email_content, free_rss_content, premium_web_content, premium_email_content]</c> in the post request body.
    /// <para>
    /// <b>Note:</b> Generating HTML is slow. We recommend only requesting the HTML versions you need at the time.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public PostContent? Content { get; init; }

    /// <summary>
    /// Optional list of stats for a post. Retrievable by including <c>expand: [stats]</c> in the post request body. &lt;br&gt;&lt;br&gt; <b>Note:</b> If a timeout occurs while aggregating stats, subsequent requests may return consolidated click metrics rather than individual raw click metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public PostStats? Stats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
