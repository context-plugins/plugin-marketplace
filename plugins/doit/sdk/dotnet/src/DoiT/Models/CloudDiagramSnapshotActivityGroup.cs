using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A snapshot activity group containing the individual activity records that produced it.
/// </summary>
public record CloudDiagramSnapshotActivityGroup
{
    /// <summary>
    /// Activity group ID.
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// Layer ID this group belongs to.
    /// </summary>
    [JsonPropertyName("statussheet")]
    public required string Statussheet { get; init; }

    /// <summary>
    /// Timestamp of the activity group.
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    /// <summary>
    /// Tags associated with the group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// ID of the associated snapshot (equal to the group ID).
    /// </summary>
    [JsonPropertyName("snapshot")]
    public required string Snapshot { get; init; }

    /// <summary>
    /// Individual activity records within this group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<CloudDiagramActivityItem>? Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
