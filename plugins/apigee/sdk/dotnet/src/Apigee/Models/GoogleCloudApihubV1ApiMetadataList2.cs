using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. The list of API metadata.
/// </summary>
public record GoogleCloudApihubV1ApiMetadataList2
{
    /// <summary>
    /// Required. The list of API metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiMetadata")]
    public IReadOnlyList<GoogleCloudApihubV1ApiMetadata>? ApiMetadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
