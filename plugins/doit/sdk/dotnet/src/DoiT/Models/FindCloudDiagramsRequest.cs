using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for locating cloud diagrams for given resource IDs.
/// </summary>
public record FindCloudDiagramsRequest
{
    /// <summary>
    /// Resource IDs to find diagrams for.
    /// </summary>
    [JsonPropertyName("resources")]
    public required IReadOnlyList<string> Resources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
