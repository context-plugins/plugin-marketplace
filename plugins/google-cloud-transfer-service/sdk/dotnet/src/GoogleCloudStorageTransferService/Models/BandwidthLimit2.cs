using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.
/// </summary>
public record BandwidthLimit2
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
