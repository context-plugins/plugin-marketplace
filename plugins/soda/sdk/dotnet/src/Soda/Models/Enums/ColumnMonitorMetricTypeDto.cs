using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ColumnMonitorMetricTypeDto>))]
public sealed record ColumnMonitorMetricTypeDto : OpenStringEnum<ColumnMonitorMetricTypeDto>
{
    private ColumnMonitorMetricTypeDto(string value) : base(value)
    {
    }

    public static readonly ColumnMonitorMetricTypeDto MissingPercentage = new("missingPercentage");

    public static readonly ColumnMonitorMetricTypeDto DuplicatePercentage = new("duplicatePercentage");

    public static readonly ColumnMonitorMetricTypeDto Average = new("average");

    public static readonly ColumnMonitorMetricTypeDto ColumnFreshness = new("columnFreshness");

    public static readonly ColumnMonitorMetricTypeDto Sum = new("sum");

    public static readonly ColumnMonitorMetricTypeDto DistinctValuesCount = new("distinctValuesCount");

    public static readonly ColumnMonitorMetricTypeDto Count = new("count");

    public static readonly ColumnMonitorMetricTypeDto MinimumValue = new("minimumValue");

    public static readonly ColumnMonitorMetricTypeDto MaximumValue = new("maximumValue");

    public static readonly ColumnMonitorMetricTypeDto DuplicateValuesPercentage = new("duplicateValuesPercentage");

    public static readonly ColumnMonitorMetricTypeDto MinimumLength = new("minimumLength");

    public static readonly ColumnMonitorMetricTypeDto MaximumLength = new("maximumLength");

    public static readonly ColumnMonitorMetricTypeDto AverageLength = new("averageLength");

    public static readonly ColumnMonitorMetricTypeDto StandardDeviation = new("standardDeviation");

    public static readonly ColumnMonitorMetricTypeDto Variance = new("variance");

    public static readonly ColumnMonitorMetricTypeDto Q1 = new("q1");

    public static readonly ColumnMonitorMetricTypeDto Median = new("median");

    public static readonly ColumnMonitorMetricTypeDto Q3 = new("q3");

    public TResult Match<TResult>(Func<TResult> onMissingPercentage,
        Func<TResult> onDuplicatePercentage,
        Func<TResult> onAverage,
        Func<TResult> onColumnFreshness,
        Func<TResult> onSum,
        Func<TResult> onDistinctValuesCount,
        Func<TResult> onCount,
        Func<TResult> onMinimumValue,
        Func<TResult> onMaximumValue,
        Func<TResult> onDuplicateValuesPercentage,
        Func<TResult> onMinimumLength,
        Func<TResult> onMaximumLength,
        Func<TResult> onAverageLength,
        Func<TResult> onStandardDeviation,
        Func<TResult> onVariance,
        Func<TResult> onQ1,
        Func<TResult> onMedian,
        Func<TResult> onQ3,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MissingPercentage => onMissingPercentage(),
            _ when this == DuplicatePercentage => onDuplicatePercentage(),
            _ when this == Average => onAverage(),
            _ when this == ColumnFreshness => onColumnFreshness(),
            _ when this == Sum => onSum(),
            _ when this == DistinctValuesCount => onDistinctValuesCount(),
            _ when this == Count => onCount(),
            _ when this == MinimumValue => onMinimumValue(),
            _ when this == MaximumValue => onMaximumValue(),
            _ when this == DuplicateValuesPercentage => onDuplicateValuesPercentage(),
            _ when this == MinimumLength => onMinimumLength(),
            _ when this == MaximumLength => onMaximumLength(),
            _ when this == AverageLength => onAverageLength(),
            _ when this == StandardDeviation => onStandardDeviation(),
            _ when this == Variance => onVariance(),
            _ when this == Q1 => onQ1(),
            _ when this == Median => onMedian(),
            _ when this == Q3 => onQ3(),
            _ => otherwise(Value)
        };

    public void Match(Action onMissingPercentage,
        Action onDuplicatePercentage,
        Action onAverage,
        Action onColumnFreshness,
        Action onSum,
        Action onDistinctValuesCount,
        Action onCount,
        Action onMinimumValue,
        Action onMaximumValue,
        Action onDuplicateValuesPercentage,
        Action onMinimumLength,
        Action onMaximumLength,
        Action onAverageLength,
        Action onStandardDeviation,
        Action onVariance,
        Action onQ1,
        Action onMedian,
        Action onQ3,
        Action<string> otherwise)
    {
        if (this == MissingPercentage) onMissingPercentage();
        else if (this == DuplicatePercentage) onDuplicatePercentage();
        else if (this == Average) onAverage();
        else if (this == ColumnFreshness) onColumnFreshness();
        else if (this == Sum) onSum();
        else if (this == DistinctValuesCount) onDistinctValuesCount();
        else if (this == Count) onCount();
        else if (this == MinimumValue) onMinimumValue();
        else if (this == MaximumValue) onMaximumValue();
        else if (this == DuplicateValuesPercentage) onDuplicateValuesPercentage();
        else if (this == MinimumLength) onMinimumLength();
        else if (this == MaximumLength) onMaximumLength();
        else if (this == AverageLength) onAverageLength();
        else if (this == StandardDeviation) onStandardDeviation();
        else if (this == Variance) onVariance();
        else if (this == Q1) onQ1();
        else if (this == Median) onMedian();
        else if (this == Q3) onQ3();
        else otherwise(Value);
    }
}
