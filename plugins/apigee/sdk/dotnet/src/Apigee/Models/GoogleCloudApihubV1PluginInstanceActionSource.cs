using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// PluginInstanceActionSource represents the plugin instance action source.
/// </summary>
public record GoogleCloudApihubV1PluginInstanceActionSource
{
    /// <summary>
    /// Output only. The resource name of the source plugin instance. Format is <c>projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pluginInstance")]
    public string? PluginInstance { get; init; }

    /// <summary>
    /// Output only. The id of the plugin instance action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionId")]
    public string? ActionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
