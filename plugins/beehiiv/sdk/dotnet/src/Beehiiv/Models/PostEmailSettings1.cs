using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The email settings to use for this post. If not provided, the default value will be used.
/// </summary>
public record PostEmailSettings1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from_address")]
    public string? FromAddress { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_live_url")]
    public string? CustomLiveUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_title_in_email")]
    public bool? DisplayTitleInEmail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_byline_in_email")]
    public bool? DisplayBylineInEmail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_subtitle_in_email")]
    public bool? DisplaySubtitleInEmail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_header_engagement_buttons")]
    public string? EmailHeaderEngagementButtons { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_header_social_share")]
    public string? EmailHeaderSocialShare { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_preview_text")]
    public string? EmailPreviewText { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_subject_line")]
    public string? EmailSubjectLine { get; init; }

    /// <summary>
    /// Email address to set as Reply-To. Must be a verified reply-to address owned by the publication. Returns 422 if not found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reply_to_address")]
    public string? ReplyToAddress { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
