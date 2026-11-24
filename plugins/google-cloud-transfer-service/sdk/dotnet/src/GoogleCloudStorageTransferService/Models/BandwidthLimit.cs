using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Specifies a bandwidth limit for an agent pool.
/// </summary>
public record BandwidthLimit
{
    /// <summary>
    /// Bandwidth rate in megabytes per second, distributed across all the agents in the pool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limitMbps")]
    public string? LimitMbps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
