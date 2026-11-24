using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. Add-on configurations.
/// </summary>
public record GoogleCloudApigeeV1AddonsConfig1
{
    /// <summary>
    /// Configuration for the Monetization add-on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monetizationConfig")]
    public GoogleCloudApigeeV1MonetizationConfig? MonetizationConfig { get; init; }

    /// <summary>
    /// Configuration for the API Security add-on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiSecurityConfig")]
    public GoogleCloudApigeeV1ApiSecurityConfig2? ApiSecurityConfig { get; init; }

    /// <summary>
    /// Configuration for the Integration add-on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("integrationConfig")]
    public GoogleCloudApigeeV1IntegrationConfig? IntegrationConfig { get; init; }

    /// <summary>
    /// Configuration for the Connectors Platform add-on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectorsPlatformConfig")]
    public GoogleCloudApigeeV1ConnectorsPlatformConfig? ConnectorsPlatformConfig { get; init; }

    /// <summary>
    /// Configuration for the Analytics add-on. Only used in organizations.environments.addonsConfig.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analyticsConfig")]
    public GoogleCloudApigeeV1AnalyticsConfig2? AnalyticsConfig { get; init; }

    /// <summary>
    /// Configuration for the Advanced API Ops add-on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("advancedApiOpsConfig")]
    public GoogleCloudApigeeV1AdvancedApiOpsConfig? AdvancedApiOpsConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
