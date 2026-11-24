using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record CancelCacheReportInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the cache report you want to cancel.
    /// </summary>
    [JsonPropertyName("CacheReportARN")]
    public required string CacheReportArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
