using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

public record SummarySearchResult
{
    /// <summary>
    /// HTTP status code for the response.
    /// </summary>
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    /// <summary>
    /// Number of articles returned in results after applying returnedArticleCount.
    /// </summary>
    [JsonPropertyName("numResults")]
    public required long NumResults { get; init; }

    /// <summary>
    /// Generated summary of the selected articles, or 'No articles found' when no content matches.
    /// </summary>
    [JsonPropertyName("summary")]
    public required string Summary { get; init; }

    /// <summary>
    /// Articles returned after summary generation, limited by returnedArticleCount.
    /// </summary>
    [JsonPropertyName("results")]
    public required IReadOnlyList<Article> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
