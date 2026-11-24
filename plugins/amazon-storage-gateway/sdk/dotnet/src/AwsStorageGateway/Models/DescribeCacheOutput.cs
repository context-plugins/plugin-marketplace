using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeCacheOutput
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// An array of strings that identify disks that are to be configured as working storage. Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DiskIds")]
    public IReadOnlyList<string>? DiskIds { get; init; }

    /// <summary>
    /// The amount of cache in bytes allocated to a gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheAllocatedInBytes")]
    public int? CacheAllocatedInBytes { get; init; }

    /// <summary>
    /// Percent use of the gateway's cache storage. This metric applies only to the gateway-cached volume setup. The sample is taken at the end of the reporting period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheUsedPercentage")]
    public double? CacheUsedPercentage { get; init; }

    /// <summary>
    /// The file share's contribution to the overall percentage of the gateway's cache that has not been persisted to Amazon Web Services. The sample is taken at the end of the reporting period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheDirtyPercentage")]
    public double? CacheDirtyPercentage { get; init; }

    /// <summary>
    /// Percent of application read operations from the file shares that are served from cache. The sample is taken at the end of the reporting period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheHitPercentage")]
    public double? CacheHitPercentage { get; init; }

    /// <summary>
    /// Percent of application read operations from the file shares that are not served from cache. The sample is taken at the end of the reporting period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheMissPercentage")]
    public double? CacheMissPercentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
