using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for creating or updating multiple insights in a batch.
/// </summary>
public record CreateResultsBody
{
    /// <summary>
    /// List of insights to create or update.
    /// </summary>
    [JsonPropertyName("results")]
    public required IReadOnlyList<InsightRequest> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
