using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration for the addon.
/// </summary>
public record GoogleCloudApihubV1AddonConfig
{
    /// <summary>
    /// Configuration for gateway plugin addons.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gatewayPluginAddonConfig")]
    public GoogleCloudApihubV1GatewayPluginAddonConfig2? GatewayPluginAddonConfig { get; init; }

    /// <summary>
    /// Configuration for addons which act on all data in the API hub.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allDataAddonConfig")]
    public GoogleCloudApihubV1AllDataAddonConfig2? AllDataAddonConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
