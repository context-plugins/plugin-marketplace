using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration for addons which act on all data in the API hub.
/// </summary>
public record GoogleCloudApihubV1AllDataAddonConfig2
{
    /// <summary>
    /// Required. If true, the addon is enabled for all data in the API hub.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
