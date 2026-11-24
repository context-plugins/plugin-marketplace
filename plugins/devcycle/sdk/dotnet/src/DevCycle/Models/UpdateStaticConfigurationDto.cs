using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record UpdateStaticConfigurationDto
{
    /// <summary>
    /// Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id.
    /// Must only contain lower-case characters and <c>_</c>, <c>-</c> or <c>.</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    [StringLength(100, MinimumLength = 1)]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public string? Key { get; init; }

    /// <summary>
    /// Name of the Feature
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// Feature description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public string? Description { get; init; }

    /// <summary>
    /// Feature type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type2DevCycleManagementDeprecatedFeaturesV1Api? Type { get; init; }

    /// <summary>
    /// Feature tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// The key of the variation that is used as the control variation for Metrics
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("controlVariation")]
    public string? ControlVariation { get; init; }

    /// <summary>
    /// Feature-level settings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settings")]
    public FeatureSettingsDto? Settings { get; init; }

    /// <summary>
    /// SDK Type Visibilty Settings
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sdkVisibility")]
    public FeatureSdkVisibilityDto? SdkVisibility { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("staleness")]
    public object? Staleness { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public UpdateFeatureSummaryDto? Summary { get; init; }

    /// <summary>
    /// The static value of each variable in the feature
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public object? Variables { get; init; }

    /// <summary>
    /// The status of the configuration in each environment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environments")]
    public object? Environments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
