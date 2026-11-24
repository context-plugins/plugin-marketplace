using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Core.Validation.Attributes;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record Rollout
{
    /// <summary>
    /// Rollout start percentage
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startPercentage")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? StartPercentage { get; init; }

    /// <summary>
    /// Type of rollout
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeDevCycleManagementDeprecatedFeaturesV1Api Type { get; init; }

    /// <summary>
    /// Date to start rollout
    /// </summary>
    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// Stages of rollout
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stages")]
    public IReadOnlyList<RolloutStage>? Stages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
