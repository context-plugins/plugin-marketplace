using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// Enables or disables enhanced data source metrics for specified data sources. Note that metricsConfig won't be used unless the dataSourceLevelMetricsBehavior value is set to PER_DATA_SOURCE_METRICS. If the dataSourceLevelMetricsBehavior is set to FULL_REQUEST_DATA_SOURCE_METRICS instead, metricsConfig will be ignored. However, you can still set its value. metricsConfig can be ENABLED or DISABLED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MetricsConfig>))]
public sealed record MetricsConfig : OpenStringEnum<MetricsConfig>
{
    private MetricsConfig(string value) : base(value)
    {
    }

    public static readonly MetricsConfig Enabled = new("ENABLED");

    public static readonly MetricsConfig Disabled = new("DISABLED");

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
