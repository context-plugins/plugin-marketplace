using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Story history result
/// </summary>
public record StoryHistoryResult
{
    /// <summary>
    /// HTTP status code for the response.
    /// </summary>
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    /// <summary>
    /// Total number of matching history records.
    /// </summary>
    [JsonPropertyName("numResults")]
    public required long NumResults { get; init; }

    /// <summary>
    /// History records returned for the requested page.
    /// </summary>
    [JsonPropertyName("results")]
    public required IReadOnlyList<StoryHistoryRecord> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
