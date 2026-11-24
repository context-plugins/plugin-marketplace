using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Runtime configuration for the Analytics add-on.
/// </summary>
public record GoogleCloudApigeeV1RuntimeAnalyticsConfig
{
    /// <summary>
    /// If Runtime should send billing data to AX or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingPipelineEnabled")]
    public bool? BillingPipelineEnabled { get; init; }

    /// <summary>
    /// If the Analytics is enabled or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
