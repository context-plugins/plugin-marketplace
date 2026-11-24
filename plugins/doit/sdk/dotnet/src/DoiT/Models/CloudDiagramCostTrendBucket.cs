using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A single bucket in the trend series.
/// </summary>
public record CloudDiagramCostTrendBucket
{
    /// <summary>
    /// Inclusive start of this bucket. ISO date for <c>day</c> and <c>month</c>; week label for <c>week</c>.
    /// </summary>
    [JsonPropertyName("bucketStart")]
    public required string BucketStart { get; init; }

    /// <summary>
    /// Total cost for this bucket.
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
