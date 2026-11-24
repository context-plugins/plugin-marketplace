using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The CollectApiData method's request.
/// </summary>
public record GoogleCloudApihubV1CollectApiDataRequest
{
    /// <summary>
    /// Required. The type of collection. Applies to all entries in api_data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collectionType")]
    public CollectionType? CollectionType { get; init; }

    /// <summary>
    /// Required. The plugin instance collecting the API data. Format: <c>projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pluginInstance")]
    public string? PluginInstance { get; init; }

    /// <summary>
    /// Required. The API data to be collected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiData")]
    public GoogleCloudApihubV1ApiData2? ApiData { get; init; }

    /// <summary>
    /// Required. The action ID to be used for collecting the API data. This should map to one of the action IDs specified in action configs in the plugin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionId")]
    public string? ActionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
