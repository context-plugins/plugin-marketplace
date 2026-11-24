using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Output only. The source of the resource is a plugin instance action.
/// </summary>
public record GoogleCloudApihubV1PluginInstanceActionSource2
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
