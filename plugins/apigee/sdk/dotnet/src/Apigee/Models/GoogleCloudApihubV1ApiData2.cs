using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. The API data to be collected.
/// </summary>
public record GoogleCloudApihubV1ApiData2
{
    /// <summary>
    /// Optional. The list of API metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiMetadataList")]
    public GoogleCloudApihubV1ApiMetadataList2? ApiMetadataList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
