using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Resolves the client ip based on a custom header.
/// </summary>
public record GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithm
{
    /// <summary>
    /// The index of the ip in the header. (By default, value is 0 if missing)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ipHeaderIndex")]
    public int? IpHeaderIndex { get; init; }

    /// <summary>
    /// The name of the header to extract the client ip from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ipHeaderName")]
    public string? IpHeaderName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
