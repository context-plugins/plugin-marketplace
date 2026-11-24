using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The LookupApiHubInstance method's response.`
/// </summary>
public record GoogleCloudApihubV1LookupApiHubInstanceResponse
{
    /// <summary>
    /// API Hub instance for a project if it exists, empty otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiHubInstance")]
    public GoogleCloudApihubV1ApiHubInstance1? ApiHubInstance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
