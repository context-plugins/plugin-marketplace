using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Core.Validation.Attributes;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record RolloutStage
{
    /// <summary>
    /// Target percentage to reach by the step date
    /// </summary>
    [JsonPropertyName("percentage")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Percentage { get; init; }

    /// <summary>
    /// Defines the transition into this percentage level
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1DevCycleManagementDeprecatedFeaturesV1Api Type { get; init; }

    /// <summary>
    /// Date the target percentage should be fully applied
    /// </summary>
    [JsonPropertyName("date")]
    public required DateTimeOffset Date { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
