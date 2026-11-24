using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Aggregation function associated with the metric.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Aggregation>))]
public sealed record Aggregation : OpenStringEnum<Aggregation>
{
    private Aggregation(string value) : base(value)
    {
    }

    public static readonly Aggregation AggregationFunctionUnspecified = new("AGGREGATION_FUNCTION_UNSPECIFIED");

    public static readonly Aggregation Avg = new("AVG");

    public static readonly Aggregation Sum = new("SUM");

    public static readonly Aggregation Min = new("MIN");

    public static readonly Aggregation Max = new("MAX");

    public static readonly Aggregation CountDistinct = new("COUNT_DISTINCT");

    public TResult Match<TResult>(Func<TResult> onAggregationFunctionUnspecified,
        Func<TResult> onAvg,
        Func<TResult> onSum,
        Func<TResult> onMin,
        Func<TResult> onMax,
        Func<TResult> onCountDistinct,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AggregationFunctionUnspecified => onAggregationFunctionUnspecified(),
            _ when this == Avg => onAvg(),
            _ when this == Sum => onSum(),
            _ when this == Min => onMin(),
            _ when this == Max => onMax(),
            _ when this == CountDistinct => onCountDistinct(),
            _ => otherwise(Value)
        };

    public void Match(Action onAggregationFunctionUnspecified,
        Action onAvg,
        Action onSum,
        Action onMin,
        Action onMax,
        Action onCountDistinct,
        Action<string> otherwise)
    {
        if (this == AggregationFunctionUnspecified) onAggregationFunctionUnspecified();
        else if (this == Avg) onAvg();
        else if (this == Sum) onSum();
        else if (this == Min) onMin();
        else if (this == Max) onMax();
        else if (this == CountDistinct) onCountDistinct();
        else otherwise(Value);
    }
}
