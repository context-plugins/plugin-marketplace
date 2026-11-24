using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeCacheReportInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the cache report you want to describe.
    /// </summary>
    [JsonPropertyName("CacheReportARN")]
    public required string CacheReportArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
