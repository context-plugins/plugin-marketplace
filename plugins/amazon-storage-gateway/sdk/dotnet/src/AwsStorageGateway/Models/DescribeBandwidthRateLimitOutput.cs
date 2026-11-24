using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeBandwidthRateLimitOutput
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// The average upload bandwidth rate limit in bits per second. This field does not appear in the response if the upload rate limit is not set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AverageUploadRateLimitInBitsPerSec")]
    public int? AverageUploadRateLimitInBitsPerSec { get; init; }

    /// <summary>
    /// The average download bandwidth rate limit in bits per second. This field does not appear in the response if the download rate limit is not set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AverageDownloadRateLimitInBitsPerSec")]
    public int? AverageDownloadRateLimitInBitsPerSec { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
