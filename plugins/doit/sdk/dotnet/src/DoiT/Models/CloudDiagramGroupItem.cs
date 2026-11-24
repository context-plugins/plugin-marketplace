using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Reference to a component contained within a group.
/// </summary>
public record CloudDiagramGroupItem
{
    /// <summary>
    /// Component ID.
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// Component type.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeDoiTCloudDiagramsApi Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
