using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record ApiCache
{
    /// <summary>
    /// TTL in seconds for cache entries. Valid values are 1–3,600 seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ttl")]
    public int? Ttl { get; init; }

    /// <summary>
    /// Caching behavior. FULL_REQUEST_CACHING: All requests from the same user are cached. Individual resolvers are automatically cached. All API calls will try to return responses from the cache. PER_RESOLVER_CACHING: Individual resolvers that you specify are cached. OPERATION_LEVEL_CACHING: Full requests are cached together and returned without executing resolvers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiCachingBehavior")]
    public ApiCachingBehavior? ApiCachingBehavior { get; init; }

    /// <summary>
    /// Transit encryption flag when connecting to cache. You cannot update this setting after creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transitEncryptionEnabled")]
    public bool? TransitEncryptionEnabled { get; init; }

    /// <summary>
    /// At-rest encryption flag for cache. You cannot update this setting after creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("atRestEncryptionEnabled")]
    public bool? AtRestEncryptionEnabled { get; init; }

    /// <summary>
    /// The cache instance type. Valid values are SMALL MEDIUM LARGE XLARGE LARGE_2X LARGE_4X LARGE_8X (not available in all regions) LARGE_12X Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used. The following legacy instance types are available, but their use is discouraged: T2_SMALL: A t2.small instance type. T2_MEDIUM: A t2.medium instance type. R4_LARGE: A r4.large instance type. R4_XLARGE: A r4.xlarge instance type. R4_2XLARGE: A r4.2xlarge instance type. R4_4XLARGE: A r4.4xlarge instance type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// The cache instance status. AVAILABLE: The instance is available for use. CREATING: The instance is currently creating. DELETING: The instance is currently deleting. MODIFYING: The instance is currently modifying. FAILED: The instance has failed creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include: NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the throughput exceeded the aggregated bandwidth limit. This is useful for diagnosing bottlenecks in a cache configuration. EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis process. This is useful for diagnosing bottlenecks in a cache configuration. Metrics will be recorded by API ID. You can set the value to ENABLED or DISABLED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("healthMetricsConfig")]
    public HealthMetricsConfig? HealthMetricsConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
