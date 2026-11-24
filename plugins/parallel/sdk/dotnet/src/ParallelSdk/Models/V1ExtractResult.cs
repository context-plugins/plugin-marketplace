using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Extract result for a single URL.
/// </summary>
public record V1ExtractResult
{
    /// <summary>
    /// URL associated with the search result.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Title of the webpage, if available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public Title? Title { get; init; }

    /// <summary>
    /// Publish date of the webpage in YYYY-MM-DD format, if available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publish_date")]
    public PublishDate? PublishDate { get; init; }

    /// <summary>
    /// Relevant excerpted content from the URL, formatted as markdown.
    /// </summary>
    [JsonPropertyName("excerpts")]
    public required IReadOnlyList<string> Excerpts { get; init; }

    /// <summary>
    /// Full content from the URL formatted as markdown, if requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("full_content")]
    public FullContent? FullContent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
