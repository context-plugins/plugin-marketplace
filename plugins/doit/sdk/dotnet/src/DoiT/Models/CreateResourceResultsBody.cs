using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for creating or replacing resource results for an insight.
/// </summary>
public record CreateResourceResultsBody
{
    /// <summary>
    /// A list of resource-level results for creating or updating an insight.
    /// </summary>
    [JsonPropertyName("resourceResults")]
    public required IReadOnlyList<ResourceResultRequest> ResourceResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
