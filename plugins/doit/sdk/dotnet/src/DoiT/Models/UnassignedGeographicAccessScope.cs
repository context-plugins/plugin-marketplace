using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record UnassignedGeographicAccessScope
{
    /// <summary>
    /// No geographic scope is assigned.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "unassigned";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
