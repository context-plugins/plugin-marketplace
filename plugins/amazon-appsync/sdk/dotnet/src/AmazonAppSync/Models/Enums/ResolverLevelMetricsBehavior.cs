using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include: GraphQL errors: The number of GraphQL errors that occurred. Requests: The number of invocations that occurred during a request. Latency: The time to complete a resolver invocation. Cache hits: The number of cache hits during a request. Cache misses: The number of cache misses during a request. These metrics can be emitted to CloudWatch per resolver or for all resolvers in the request. Metrics will be recorded by API ID and resolver name. resolverLevelMetricsBehavior accepts one of these values at a time: FUL
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResolverLevelMetricsBehavior>))]
public sealed record ResolverLevelMetricsBehavior : OpenStringEnum<ResolverLevelMetricsBehavior>
{
    private ResolverLevelMetricsBehavior(string value) : base(value)
    {
    }

    public static readonly ResolverLevelMetricsBehavior FullRequestResolverMetrics = new(
        "FULL_REQUEST_RESOLVER_METRICS");

    public static readonly ResolverLevelMetricsBehavior PerResolverMetrics = new("PER_RESOLVER_METRICS");

    public TResult Match<TResult>(Func<TResult> onFullRequestResolverMetrics,
        Func<TResult> onPerResolverMetrics,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FullRequestResolverMetrics => onFullRequestResolverMetrics(),
            _ when this == PerResolverMetrics => onPerResolverMetrics(),
            _ => otherwise(Value)
        };

    public void Match(Action onFullRequestResolverMetrics, Action onPerResolverMetrics, Action<string> otherwise)
    {
        if (this == FullRequestResolverMetrics) onFullRequestResolverMetrics();
        else if (this == PerResolverMetrics) onPerResolverMetrics();
        else otherwise(Value);
    }
}
