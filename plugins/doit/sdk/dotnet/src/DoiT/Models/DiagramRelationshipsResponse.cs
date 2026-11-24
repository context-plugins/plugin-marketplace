using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// The response payload for the resource relationships endpoint.
/// </summary>
public record DiagramRelationshipsResponse
{
    /// <summary>
    /// The anchor resource the traversal started from.
    /// </summary>
    [JsonPropertyName("anchor")]
    public required DiagramRelationshipsAnchor Anchor { get; init; }

    [JsonPropertyName("direction")]
    public required Direction Direction { get; init; }

    [JsonPropertyName("depth")]
    public required Depth Depth { get; init; }

    [JsonPropertyName("kind")]
    public required Kind Kind { get; init; }

    /// <summary>
    /// Resources related to the anchor (capped at 200).
    /// </summary>
    [JsonPropertyName("relations")]
    public required IReadOnlyList<DiagramRelationship> Relations { get; init; }

    /// <summary>
    /// True when the relation list was capped at 200 entries.
    /// </summary>
    [JsonPropertyName("truncated")]
    public required bool Truncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
