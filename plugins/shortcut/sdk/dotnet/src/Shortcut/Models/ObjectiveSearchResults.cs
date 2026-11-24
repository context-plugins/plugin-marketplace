using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The results of the Objective search query.
/// </summary>
public record ObjectiveSearchResults
{
    /// <summary>
    /// The total number of matches for the search query. The first 1000 matches can be paged through via the API.
    /// </summary>
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    /// <summary>
    /// A list of search results.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<ObjectiveSearchResult> Data { get; init; }

    /// <summary>
    /// The URL path and query string for the next page of search results.
    /// </summary>
    [JsonPropertyName("next")]
    public required string? Next { get; init; }
}
