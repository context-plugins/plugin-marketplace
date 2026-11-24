using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Pagination metadata for usage summaries
/// </summary>
public record UsagePaginationMeta
{
    /// <summary>
    /// The requested limit
    /// </summary>
    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    /// <summary>
    /// The requested offset
    /// </summary>
    [JsonPropertyName("offset")]
    public required int Offset { get; init; }

    /// <summary>
    /// Total number of usage summaries available
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    /// <summary>
    /// Whether there are more results available
    /// </summary>
    [JsonPropertyName("hasMore")]
    public required bool HasMore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
