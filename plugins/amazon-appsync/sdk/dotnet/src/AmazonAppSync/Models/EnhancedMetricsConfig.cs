using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record EnhancedMetricsConfig
{
    /// <summary>
    /// Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include: GraphQL errors: The number of GraphQL errors that occurred. Requests: The number of invocations that occurred during a request. Latency: The time to complete a resolver invocation. Cache hits: The number of cache hits during a request. Cache misses: The number of cache misses during a request. These metrics can be emitted to CloudWatch per resolver or for all resolvers in the request. Metrics will be recorded by API ID and resolver name. resolverLevelMetricsBehavior accepts one of these values at a time: FUL
    /// </summary>
    [JsonPropertyName("resolverLevelMetricsBehavior")]
    public required ResolverLevelMetricsBehavior ResolverLevelMetricsBehavior { get; init; }

    /// <summary>
    /// Controls how data source metrics will be emitted to CloudWatch. Data source metrics include: Requests: The number of invocations that occured during a request. Latency: The time to complete a data source invocation. Errors: The number of errors that occurred during a data source invocation. These metrics can be emitted to CloudWatch per data source or for all data sources in the request. Metrics will be recorded by API ID and data source name. dataSourceLevelMetricsBehavior accepts one of these values at a time: FULL_REQUEST_DATA_SOURCE_METRICS: Records and emits metric data for all data sourc
    /// </summary>
    [JsonPropertyName("dataSourceLevelMetricsBehavior")]
    public required DataSourceLevelMetricsBehavior DataSourceLevelMetricsBehavior { get; init; }

    /// <summary>
    /// Controls how operation metrics will be emitted to CloudWatch. Operation metrics include: Requests: The number of times a specified GraphQL operation was called. GraphQL errors: The number of GraphQL errors that occurred during a specified GraphQL operation. Metrics will be recorded by API ID and operation name. You can set the value to ENABLED or DISABLED.
    /// </summary>
    [JsonPropertyName("operationLevelMetricsConfig")]
    public required OperationLevelMetricsConfig OperationLevelMetricsConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
