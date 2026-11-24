using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The EnablePluginInstanceAction method's request.
/// </summary>
public record GoogleCloudApihubV1EnablePluginInstanceActionRequest
{
    /// <summary>
    /// Required. The action id to enable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionId")]
    public string? ActionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
