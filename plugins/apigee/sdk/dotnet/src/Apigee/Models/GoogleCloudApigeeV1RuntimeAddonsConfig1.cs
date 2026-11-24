using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The latest runtime configurations for add-ons.
/// </summary>
public record GoogleCloudApigeeV1RuntimeAddonsConfig1
{
    /// <summary>
    /// Name of the addons config in the format: <c>organizations/{org}/environments/{env}/addonsConfig</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Revision number used by the runtime to detect config changes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// Runtime configuration for API Security add-on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiSecurityConfig")]
    public GoogleCloudApigeeV1RuntimeApiSecurityConfig2? ApiSecurityConfig { get; init; }

    /// <summary>
    /// Runtime configuration for Analytics add-on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analyticsConfig")]
    public GoogleCloudApigeeV1RuntimeAnalyticsConfig2? AnalyticsConfig { get; init; }

    /// <summary>
    /// UID is to detect if config is recreated after deletion. The add-on config will only be deleted when the environment itself gets deleted, thus it will always be the same as the UID of EnvironmentConfig.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Runtime configuration for Spec Generation add-on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specGenerationConfig")]
    public GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig2? SpecGenerationConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
