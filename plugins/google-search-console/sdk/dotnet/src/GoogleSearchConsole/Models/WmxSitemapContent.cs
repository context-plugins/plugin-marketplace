using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Models.Enums;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Information about the various content types in the sitemap.
/// </summary>
public record WmxSitemapContent
{
    /// <summary>
    /// The number of URLs in the sitemap (of the content type).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("submitted")]
    public string? Submitted { get; init; }

    /// <summary>
    /// *Deprecated; do not use.*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("indexed")]
    public string? Indexed { get; init; }

    /// <summary>
    /// The specific type of content in this sitemap. For example: <c>web</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
