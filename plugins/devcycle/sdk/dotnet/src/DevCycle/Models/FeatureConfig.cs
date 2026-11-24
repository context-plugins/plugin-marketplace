using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record FeatureConfig
{
    /// <summary>
    /// ID of the Feature owning the Configuration
    /// </summary>
    [JsonPropertyName("_feature")]
    public required string Feature { get; init; }

    /// <summary>
    /// ID of the Environment owning the Configuration
    /// </summary>
    [JsonPropertyName("_environment")]
    public required string Environment { get; init; }

    /// <summary>
    /// User who created the Feature Configuration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_createdBy")]
    public string? CreatedBy { get; init; }

    /// <summary>
    /// Status of the Feature Configuration
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    /// <summary>
    /// Date the Feature Configuration was started
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startedAt")]
    public DateTimeOffset? StartedAt { get; init; }

    /// <summary>
    /// The date the Feature Configuration was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The targets to evaluate what variation a user should be delivered
    /// </summary>
    [JsonPropertyName("targets")]
    public required IReadOnlyList<Target> Targets { get; init; }

    /// <summary>
    /// Controls whether the feature configuration is editable for a given user
    /// </summary>
    [JsonPropertyName("readonly")]
    public required bool Readonly { get; init; }

    /// <summary>
    /// Flag to indicate if the Feature owning the configuration has been marked as complete.
    /// If true, the user targeting rules are ignored and the static variation is always used.
    /// </summary>
    [JsonPropertyName("hasStaticConfig")]
    public required bool HasStaticConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
