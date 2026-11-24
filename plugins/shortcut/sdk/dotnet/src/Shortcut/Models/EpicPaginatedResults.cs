using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Results schema for paginated Epic listing.
/// </summary>
public record EpicPaginatedResults
{
    /// <summary>
    /// Array of Epic objects on the current page
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<EpicSlim> Data { get; init; }

    /// <summary>
    /// The next page number if there are more results, or null for the last page
    /// </summary>
    [JsonPropertyName("next")]
    public required long? Next { get; init; }

    /// <summary>
    /// The total number of Epics matching the query over all pages
    /// </summary>
    [JsonPropertyName("total")]
    public required long Total { get; init; }
}
