using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration for gateway plugin addons. This is used to specify the list of gateway plugin configs for which the addon is enabled.
/// </summary>
public record GoogleCloudApihubV1GatewayPluginAddonConfig
{
    /// <summary>
    /// Required. The list of gateway plugin configs for which the addon is enabled. Each gateway plugin config should have a unique plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gatewayPluginConfigs")]
    public IReadOnlyList<GoogleCloudApihubV1GatewayPluginConfig>? GatewayPluginConfigs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
