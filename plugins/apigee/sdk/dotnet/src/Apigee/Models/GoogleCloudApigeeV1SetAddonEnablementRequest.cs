using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for SetAddonEnablement.
/// </summary>
public record GoogleCloudApigeeV1SetAddonEnablementRequest
{
    /// <summary>
    /// If the API Security should be enabled in the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiSecurityEnabled")]
    public bool? ApiSecurityEnabled { get; init; }

    /// <summary>
    /// If the Analytics should be enabled in the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analyticsEnabled")]
    public bool? AnalyticsEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
