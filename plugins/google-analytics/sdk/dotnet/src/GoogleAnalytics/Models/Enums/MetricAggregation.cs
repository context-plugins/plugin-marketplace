using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MetricAggregation>))]
public sealed record MetricAggregation : OpenStringEnum<MetricAggregation>
{
    private MetricAggregation(string value) : base(value)
    {
    }

    public static readonly MetricAggregation MetricAggregationUnspecified = new("METRIC_AGGREGATION_UNSPECIFIED");

    public static readonly MetricAggregation Total = new("TOTAL");

    public static readonly MetricAggregation Minimum = new("MINIMUM");

    public static readonly MetricAggregation Maximum = new("MAXIMUM");

    public static readonly MetricAggregation Count = new("COUNT");

    public TResult Match<TResult>(Func<TResult> onMetricAggregationUnspecified,
        Func<TResult> onTotal,
        Func<TResult> onMinimum,
        Func<TResult> onMaximum,
        Func<TResult> onCount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MetricAggregationUnspecified => onMetricAggregationUnspecified(),
            _ when this == Total => onTotal(),
            _ when this == Minimum => onMinimum(),
            _ when this == Maximum => onMaximum(),
            _ when this == Count => onCount(),
            _ => otherwise(Value)
        };

    public void Match(Action onMetricAggregationUnspecified,
        Action onTotal,
        Action onMinimum,
        Action onMaximum,
        Action onCount,
        Action<string> otherwise)
    {
        if (this == MetricAggregationUnspecified) onMetricAggregationUnspecified();
        else if (this == Total) onTotal();
        else if (this == Minimum) onMinimum();
        else if (this == Maximum) onMaximum();
        else if (this == Count) onCount();
        else otherwise(Value);
    }
}
