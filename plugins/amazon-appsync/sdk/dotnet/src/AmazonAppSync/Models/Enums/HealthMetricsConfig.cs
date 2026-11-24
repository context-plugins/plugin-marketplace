using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include: NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the throughput exceeded the aggregated bandwidth limit. This is useful for diagnosing bottlenecks in a cache configuration. EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis process. This is useful for diagnosing bottlenecks in a cache configuration. Metrics will be recorded by API ID. You can set the value to ENABLED or DISABLED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HealthMetricsConfig>))]
public sealed record HealthMetricsConfig : OpenStringEnum<HealthMetricsConfig>
{
    private HealthMetricsConfig(string value) : base(value)
    {
    }

    public static readonly HealthMetricsConfig Enabled = new("ENABLED");

    public static readonly HealthMetricsConfig Disabled = new("DISABLED");

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
