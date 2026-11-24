using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record CreateFeatureDto
{
    /// <summary>
    /// Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id.
    /// Must only contain lower-case characters and <c>_</c>, <c>-</c> or <c>.</c>.
    /// </summary>
    [JsonPropertyName("key")]
    [StringLength(100, MinimumLength = 1)]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    /// <summary>
    /// Name of the Feature
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Feature description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public string? Description { get; init; }

    [JsonPropertyName("configurations")]
    public required IReadOnlyDictionary<string, UpdateFeatureConfigDto> Configurations { get; init; }

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
    /// Variation configurations to be used by feature configurations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variations")]
    public IReadOnlyList<CreateVariationDto>? Variations { get; init; }

    /// <summary>
    /// The key of the variation that is used as the control variation for Metrics
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("controlVariation")]
    public string? ControlVariation { get; init; }

    /// <summary>
    /// Variable definitions to be referenced in variations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public IReadOnlyList<CreateVariableDto>? Variables { get; init; }

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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
