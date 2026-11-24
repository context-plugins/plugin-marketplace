using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record FeatureDevCycleManagementDeprecatedFeaturesV1Api
{
    /// <summary>
    /// A unique Feature ID
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// The Project owning the Feature
    /// </summary>
    [JsonPropertyName("_project")]
    public required string Project { get; init; }

    /// <summary>
    /// Source that created the Feature
    /// </summary>
    [JsonPropertyName("source")]
    public required SourceDevCycleManagementDeprecatedFeaturesV1Api Source { get; init; }

    /// <summary>
    /// Status of the Feature
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    /// <summary>
    /// The Feature type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type3DevCycleManagementDeprecatedFeaturesV1Api? Type { get; init; }

    /// <summary>
    /// Name of the Feature
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id.
    /// Must only contain lower-case characters and <c>_</c>, <c>-</c> or <c>.</c>.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// Feature description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// ID of the User who created the Feature
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_createdBy")]
    public string? CreatedBy { get; init; }

    /// <summary>
    /// The date the Feature was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The date the Feature was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The date the Feature had an update that impacted production targeting
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prodTargetingUpdatedAt")]
    public DateTimeOffset? ProdTargetingUpdatedAt { get; init; }

    /// <summary>
    /// Variation configurations to be used by feature configurations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variations")]
    public IReadOnlyList<Variation>? Variations { get; init; }

    /// <summary>
    /// The key of the variation that is used as the control variation for Metrics
    /// </summary>
    [JsonPropertyName("controlVariation")]
    public required string ControlVariation { get; init; }

    /// <summary>
    /// The key of the variation that is set when the Feature's status is set to complete
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("staticVariation")]
    public string? StaticVariation { get; init; }

    /// <summary>
    /// Variable definitions to be referenced in variations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public IReadOnlyList<VariableDevCycleManagementDeprecatedFeaturesV1Api>? Variables { get; init; }

    /// <summary>
    /// Tags to organize Features on the dashboard
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// A link to the feature on LaunchDarkly if it has importedByLD type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ldLink")]
    public string? LdLink { get; init; }

    /// <summary>
    /// Controls whether the feature is editable for a given user
    /// </summary>
    [JsonPropertyName("readonly")]
    public required bool Readonly { get; init; }

    /// <summary>
    /// Defines feature-level settings
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settings")]
    public FeatureSettings? Settings { get; init; }

    /// <summary>
    /// SDK Type visibility settings to filter features by platform
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sdkVisibility")]
    public FeatureSdkVisibility? SdkVisibility { get; init; }

    /// <summary>
    /// An array of targeting configurations for the associated environments
    /// </summary>
    [JsonPropertyName("configurations")]
    public required IReadOnlyList<FeatureConfig> Configurations { get; init; }

    /// <summary>
    /// Most recent audit log entry for this feature
    /// Only included in response if includeLatestUpdate query param is true
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latestUpdate")]
    public AuditLogEntity? LatestUpdate { get; init; }

    /// <summary>
    /// Pending change requests for this Feature
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changeRequests")]
    public IReadOnlyList<object>? ChangeRequests { get; init; }

    /// <summary>
    /// The staleness of the feature
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("staleness")]
    public object? Staleness { get; init; }

    /// <summary>
    /// Custom status reference for this feature
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customStatus")]
    public FeatureCustomStatus? CustomStatus { get; init; }

    /// <summary>
    /// Summary details for dashboard
    /// </summary>
    [JsonPropertyName("summary")]
    public required FeatureSummary Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
