using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Information about current and next page for cursor based pagination
/// </summary>
public record PaginationResponse
{
    /// <summary>
    /// Opaque string representing a cursor to the last record returned in the response. Used for requesting the next page.
    /// </summary>
    [JsonPropertyName("endCursor")]
    public required string EndCursor { get; init; }

    /// <summary>
    /// indicates if there is another page of data to fetch or not
    /// </summary>
    [JsonPropertyName("hasNextPage")]
    public required bool HasNextPage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
