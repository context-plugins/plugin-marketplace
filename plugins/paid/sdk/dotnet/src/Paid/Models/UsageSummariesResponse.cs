using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Response containing usage summaries and pagination metadata
/// </summary>
public record UsageSummariesResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<UsageSummary> Data { get; init; }

    /// <summary>
    /// Pagination metadata for usage summaries
    /// </summary>
    [JsonPropertyName("pagination")]
    public required UsagePaginationMeta Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
