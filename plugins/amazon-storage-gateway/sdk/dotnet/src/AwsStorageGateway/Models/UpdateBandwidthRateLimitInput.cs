using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateBandwidthRateLimitInput
{
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// The average upload bandwidth rate limit in bits per second.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AverageUploadRateLimitInBitsPerSec")]
    public int? AverageUploadRateLimitInBitsPerSec { get; init; }

    /// <summary>
    /// The average download bandwidth rate limit in bits per second.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AverageDownloadRateLimitInBitsPerSec")]
    public int? AverageDownloadRateLimitInBitsPerSec { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
