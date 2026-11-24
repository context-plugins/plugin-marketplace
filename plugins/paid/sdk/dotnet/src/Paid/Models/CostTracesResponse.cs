using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Response containing cost traces and pagination metadata
/// </summary>
public record CostTracesResponse
{
    [JsonPropertyName("traces")]
    public required IReadOnlyList<CostTrace> Traces { get; init; }

    /// <summary>
    /// Pagination metadata for cost traces
    /// </summary>
    [JsonPropertyName("meta")]
    public required PaginationMeta Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
