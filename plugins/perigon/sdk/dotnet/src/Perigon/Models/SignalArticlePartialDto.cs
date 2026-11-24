using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Article details keyed by article ID for articles related to the event.
/// </summary>
public record SignalArticlePartialDto
{
    /// <summary>
    /// Article headline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Canonical URL of the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// Publisher domain for the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// Article publication date supplied with the monitor result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pubDate")]
    public string? PubDate { get; init; }

    /// <summary>
    /// URL of the publisher's favicon.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceFavicon")]
    public string? SourceFavicon { get; init; }

    /// <summary>
    /// Matched text snippets grouped by article field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("highlights")]
    public IReadOnlyDictionary<string, object>? Highlights { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
