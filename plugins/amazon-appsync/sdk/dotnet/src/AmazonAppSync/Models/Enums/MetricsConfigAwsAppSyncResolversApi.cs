using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// Enables or disables enhanced resolver metrics for specified resolvers. Note that metricsConfig won't be used unless the resolverLevelMetricsBehavior value is set to PER_RESOLVER_METRICS. If the resolverLevelMetricsBehavior is set to FULL_REQUEST_RESOLVER_METRICS instead, metricsConfig will be ignored. However, you can still set its value. metricsConfig can be ENABLED or DISABLED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MetricsConfigAwsAppSyncResolversApi>))]
public sealed record MetricsConfigAwsAppSyncResolversApi : OpenStringEnum<MetricsConfigAwsAppSyncResolversApi>
{
    private MetricsConfigAwsAppSyncResolversApi(string value) : base(value)
    {
    }

    public static readonly MetricsConfigAwsAppSyncResolversApi Enabled = new("ENABLED");

    public static readonly MetricsConfigAwsAppSyncResolversApi Disabled = new("DISABLED");

    public TResult Match<TResult>(Func<TResult> onEnabled, Func<TResult> onDisabled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Enabled => onEnabled(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnabled, Action onDisabled, Action<string> otherwise)
    {
        if (this == Enabled) onEnabled();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
