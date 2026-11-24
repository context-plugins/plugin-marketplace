using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Reference to a diagram component, including its parent diagram and layer.
/// </summary>
public record CloudDiagramComponentRef
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

    /// <summary>
    /// Parent diagram ID.
    /// </summary>
    [JsonPropertyName("scheme_id")]
    public required string SchemeId { get; init; }

    /// <summary>
    /// Parent layer ID.
    /// </summary>
    [JsonPropertyName("ss_id")]
    public required string SsId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
