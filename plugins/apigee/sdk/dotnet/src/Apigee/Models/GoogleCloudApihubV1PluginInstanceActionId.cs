using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The plugin instance and associated action that is using the curation.
/// </summary>
public record GoogleCloudApihubV1PluginInstanceActionId
{
    /// <summary>
    /// Output only. The action ID that is using the curation. This should map to one of the action IDs specified in action configs in the plugin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionId")]
    public string? ActionId { get; init; }

    /// <summary>
    /// Output only. Plugin instance that is using the curation. Format is <c>projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pluginInstance")]
    public string? PluginInstance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
