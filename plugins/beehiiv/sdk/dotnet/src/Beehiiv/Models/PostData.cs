using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record PostData
{
    /// <summary>
    /// The audience that the post is available to on the web. Only applicable if the platform is <c>web</c> or <c>both</c>.
    /// </summary>
    [JsonPropertyName("audience")]
    public required string Audience { get; init; }

    /// <summary>
    /// An array of author names
    /// </summary>
    [JsonPropertyName("authors")]
    public required IReadOnlyList<string> Authors { get; init; }

    /// <summary>
    /// All content tags that were associated with the post.
    /// </summary>
    [JsonPropertyName("content_tags")]
    public required IReadOnlyList<string> ContentTags { get; init; }

    /// <summary>
    /// The time the post was created. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonPropertyName("created")]
    public required int Created { get; init; }

    /// <summary>
    /// The time displayed in place of the <c>publish_date</c>. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayed_date")]
    public int? DisplayedDate { get; init; }

    /// <summary>
    /// The prefixed post id
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The email preview text
    /// </summary>
    [JsonPropertyName("preview_text")]
    public required string PreviewText { get; init; }

    /// <summary>
    /// The time the post was set to be published. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publish_date")]
    public int? PublishDate { get; init; }

    /// <summary>
    /// The web slug where this post can be accessed.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// A flag to indicate if a split test was done. Only applicable to email posts.
    /// </summary>
    [JsonPropertyName("split_tested")]
    public required bool SplitTested { get; init; }

    /// <summary>
    /// The status of the post.&lt;br&gt;<c>draft</c> - not been scheduled.&lt;br&gt;<c>confirmed</c> - The post will be active after the <c>scheduled_at</c>.&lt;br&gt;<c>archived</c> - The post is no longer active.
    /// </summary>
    [JsonPropertyName("status")]
    public required PostStatus Status { get; init; }

    /// <summary>
    /// The email subject line. In cases of A/B Testing, this will be adjusted to the winning subject line.
    /// </summary>
    [JsonPropertyName("subject_line")]
    public required string SubjectLine { get; init; }

    /// <summary>
    /// The subtitle displayed in web views
    /// </summary>
    [JsonPropertyName("subtitle")]
    public required string Subtitle { get; init; }

    /// <summary>
    /// The URL of the thumbnail. Defaults to the Publication logo if not set.
    /// </summary>
    [JsonPropertyName("thumbnail_url")]
    public required string ThumbnailUrl { get; init; }

    /// <summary>
    /// The title displayed in web views
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// The full URL where this post can be accessed on the web. Only applicable if the platform is <c>web</c> or <c>both</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("web_url")]
    public string? WebUrl { get; init; }

    /// <summary>
    /// The platform that the post is or will be published to.
    /// </summary>
    [JsonPropertyName("platform")]
    public required string Platform { get; init; }

    /// <summary>
    /// Meta tag description for the post, called SEO Description in the admin UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta_default_description")]
    public string? MetaDefaultDescription { get; init; }

    /// <summary>
    /// Meta tag title for the post, called SEO Title in the admin UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta_default_title")]
    public string? MetaDefaultTitle { get; init; }

    /// <summary>
    /// A flag to indicate if the post is hidden from the website feed.
    /// </summary>
    [JsonPropertyName("hidden_from_feed")]
    public required bool HiddenFromFeed { get; init; }

    /// <summary>
    /// A flag to indicate if the post enforces gated content for non-subscribers.
    /// </summary>
    [JsonPropertyName("enforce_gated_content")]
    public required bool EnforceGatedContent { get; init; }

    /// <summary>
    /// A flag to indicate if popup email capture is enabled for this post.
    /// </summary>
    [JsonPropertyName("email_capture_popup")]
    public required bool EmailCapturePopup { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
