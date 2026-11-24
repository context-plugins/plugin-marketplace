using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Optional. This configuration should be provided if the plugin action is publishing data to API hub curate layer.
/// </summary>
public record GoogleCloudApihubV1CurationConfig2
{
    /// <summary>
    /// Optional. Custom curation information for this plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customCuration")]
    public GoogleCloudApihubV1CustomCuration1? CustomCuration { get; init; }

    /// <summary>
    /// Required. The curation type for this plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("curationType")]
    public CurationType? CurationType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
