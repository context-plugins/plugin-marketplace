using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// MatchResult represents the result of matching a discovered API operation with a catalog API operation.
/// </summary>
public record GoogleCloudApihubV1MatchResult
{
    /// <summary>
    /// Output only. The name of the matched API Operation. Format: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
