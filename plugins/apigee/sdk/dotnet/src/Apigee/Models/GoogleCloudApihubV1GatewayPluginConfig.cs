using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration for a gateway plugin. This is used to specify configs for different gateways.
/// </summary>
public record GoogleCloudApihubV1GatewayPluginConfig
{
    /// <summary>
    /// Configuration for Apigee OPDK gateways.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apigeeOpdkConfig")]
    public GoogleCloudApihubV1ApigeeOpdkConfig2? ApigeeOpdkConfig { get; init; }

    /// <summary>
    /// Configuration for Apigee Edge gateways.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apigeeEdgeConfig")]
    public GoogleCloudApihubV1ApigeeEdgeConfig2? ApigeeEdgeConfig { get; init; }

    /// <summary>
    /// Configuration for Apigee X and Apigee Hybrid gateways.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apigeeXHybridConfig")]
    public GoogleCloudApihubV1ApigeeXHybridConfig2? ApigeeXHybridConfig { get; init; }

    /// <summary>
    /// Required. The name of the gateway plugin instance for which the config is to be specified. Format: projects/{project}/locations/{location}/plugins/{plugin}/pluginInstances/{plugin_instance}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pluginInstance")]
    public string? PluginInstance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
