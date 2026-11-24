using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// The anchor resource the traversal started from.
/// </summary>
public record DiagramRelationshipsAnchor
{
    /// <summary>
    /// Anchor resource ID (matches the <c>rid</c> path parameter).
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Component bucket the anchor lives in.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1DoiTCloudDiagramsApi Type { get; init; }

    /// <summary>
    /// Human-readable resource name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Cloud service type when available (e.g. <c>Amazon RDS</c>, <c>GCP Cloud SQL</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceType")]
    public string? ServiceType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
