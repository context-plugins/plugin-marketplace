using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. The config of the addon to be managed. This config will replace the config present in the addon. The type of the config should match the config type already present in the addon.
/// </summary>
public record GoogleCloudApihubV1AddonConfig2
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
