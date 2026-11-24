using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Reference to a linked infrastructure node in another diagram.
/// </summary>
public record CloudDiagramInfraNodeRef
{
    /// <summary>
    /// Infrastructure node ID.
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

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
