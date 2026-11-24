using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DeleteBandwidthRateLimitInput
{
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// One of the BandwidthType values that indicates the gateway bandwidth rate limit to delete. Valid Values: UPLOAD | DOWNLOAD | ALL
    /// </summary>
    [JsonPropertyName("BandwidthType")]
    public required string BandwidthType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
