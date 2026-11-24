using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;
using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Bluesky
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uploadIds")]
    public IReadOnlyList<string>? UploadIds { get; init; }

    /// <summary>
    /// Extra hashtags (without #), up to 8.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    [MaxLength(8)]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// Self-labels (content warnings) applied to the post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyList<Label>? Labels { get; init; }

    /// <summary>
    /// AT-URI of the post to quote (e.g. at://did.../app.bsky.feed.post/&lt;rkey&gt;).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quoteUri")]
    [MaxLength(512)]
    [RegularExpression("^at:\\/\\/\\S+$")]
    public string? QuoteUri { get; init; }

    /// <summary>
    /// Target URL for the external link card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalUrl")]
    [Format(FormatKind.Uri)]
    public string? ExternalUrl { get; init; }

    /// <summary>
    /// Card title for the external link card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalTitle")]
    public string? ExternalTitle { get; init; }

    /// <summary>
    /// Card description for the external link card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalDescription")]
    public string? ExternalDescription { get; init; }

    /// <summary>
    /// This should be URL to publicly available image uploaded to bundle.social account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail")]
    [MaxLength(2048)]
    [Format(FormatKind.Uri)]
    public string? Thumbnail { get; init; }

    /// <summary>
    /// Alt text for the video embed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("videoAlt")]
    [MaxLength(10000)]
    public string? VideoAlt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
