using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Represents the search results.
/// </summary>
public record GoogleCloudApihubV1SearchResult
{
    /// <summary>
    /// This represents the ApiHubResource. Note: Only selected fields of the resources are populated in response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource")]
    public GoogleCloudApihubV1ApiHubResource2? Resource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
