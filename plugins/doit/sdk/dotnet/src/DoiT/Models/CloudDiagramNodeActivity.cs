using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// An individual activity record scoped to a specific component node.
/// </summary>
public record CloudDiagramNodeActivity
{
    /// <summary>
    /// Activity record ID.
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// Activity type.
    /// </summary>
    [JsonPropertyName("activity")]
    public required Activity1 Activity { get; init; }

    /// <summary>
    /// Activity-specific payload (structure varies by activity type).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    /// <summary>
    /// Timestamp of the activity.
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    /// <summary>
    /// ID of the user who performed the activity.
    /// </summary>
    [JsonPropertyName("user")]
    public required string User { get; init; }

    /// <summary>
    /// Layer ID where the activity occurred.
    /// </summary>
    [JsonPropertyName("statussheet")]
    public required string Statussheet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
