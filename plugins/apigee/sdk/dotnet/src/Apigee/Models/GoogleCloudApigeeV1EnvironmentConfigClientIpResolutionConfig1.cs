using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The algorithm to resolve IP.
/// </summary>
public record GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1
{
    /// <summary>
    /// Resolves the client ip based on a custom header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headerIndexAlgorithm")]
    public GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithm? HeaderIndexAlgorithm { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
