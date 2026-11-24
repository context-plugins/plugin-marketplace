using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Resolves the client ip based on a custom header.
/// </summary>
public record GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm
{
    /// <summary>
    /// Required. The name of the header to extract the client ip from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ipHeaderName")]
    public string? IpHeaderName { get; init; }

    /// <summary>
    /// Required. The index of the ip in the header. Positive indices 0, 1, 2, 3 chooses indices from the left (first ips) Negative indices -1, -2, -3 chooses indices from the right (last ips)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ipHeaderIndex")]
    public int? IpHeaderIndex { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
