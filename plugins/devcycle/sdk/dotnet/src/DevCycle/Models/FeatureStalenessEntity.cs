using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record FeatureStalenessEntity
{
    /// <summary>
    /// Feature key
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// Feature name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Feature ID
    /// </summary>
    [JsonPropertyName("_feature")]
    public required string Feature { get; init; }

    /// <summary>
    /// Staleness status
    /// </summary>
    [JsonPropertyName("stale")]
    public required bool Stale { get; init; }

    /// <summary>
    /// Last updated at
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// If the Feature's staleness is disabled
    /// </summary>
    [JsonPropertyName("disabled")]
    public required bool Disabled { get; init; }

    /// <summary>
    /// Snooze staleness until date specified
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("snoozedUntil")]
    public DateTimeOffset? SnoozedUntil { get; init; }

    /// <summary>
    /// Reason for staleness
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public ReasonDevCycleManagementFeaturesV2Api? Reason { get; init; }

    /// <summary>
    /// Miscellaneous metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metaData")]
    public object? MetaData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
