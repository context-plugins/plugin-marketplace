using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// Optional. Partition granularity.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PartitioningTimeGranularity1>))]
public sealed record PartitioningTimeGranularity1 : OpenStringEnum<PartitioningTimeGranularity1>
{
    private PartitioningTimeGranularity1(string value) : base(value)
    {
    }

    public static readonly PartitioningTimeGranularity1 PartitioningTimeGranularityUnspecified = new(
        "PARTITIONING_TIME_GRANULARITY_UNSPECIFIED");

    public static readonly PartitioningTimeGranularity1 PartitioningTimeGranularityHour = new(
        "PARTITIONING_TIME_GRANULARITY_HOUR");

    public static readonly PartitioningTimeGranularity1 PartitioningTimeGranularityDay = new(
        "PARTITIONING_TIME_GRANULARITY_DAY");

    public static readonly PartitioningTimeGranularity1 PartitioningTimeGranularityMonth = new(
        "PARTITIONING_TIME_GRANULARITY_MONTH");

    public static readonly PartitioningTimeGranularity1 PartitioningTimeGranularityYear = new(
        "PARTITIONING_TIME_GRANULARITY_YEAR");

    public TResult Match<TResult>(Func<TResult> onPartitioningTimeGranularityUnspecified,
        Func<TResult> onPartitioningTimeGranularityHour,
        Func<TResult> onPartitioningTimeGranularityDay,
        Func<TResult> onPartitioningTimeGranularityMonth,
        Func<TResult> onPartitioningTimeGranularityYear,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PartitioningTimeGranularityUnspecified => onPartitioningTimeGranularityUnspecified(),
            _ when this == PartitioningTimeGranularityHour => onPartitioningTimeGranularityHour(),
            _ when this == PartitioningTimeGranularityDay => onPartitioningTimeGranularityDay(),
            _ when this == PartitioningTimeGranularityMonth => onPartitioningTimeGranularityMonth(),
            _ when this == PartitioningTimeGranularityYear => onPartitioningTimeGranularityYear(),
            _ => otherwise(Value)
        };

    public void Match(Action onPartitioningTimeGranularityUnspecified,
        Action onPartitioningTimeGranularityHour,
        Action onPartitioningTimeGranularityDay,
        Action onPartitioningTimeGranularityMonth,
        Action onPartitioningTimeGranularityYear,
        Action<string> otherwise)
    {
        if (this == PartitioningTimeGranularityUnspecified) onPartitioningTimeGranularityUnspecified();
        else if (this == PartitioningTimeGranularityHour) onPartitioningTimeGranularityHour();
        else if (this == PartitioningTimeGranularityDay) onPartitioningTimeGranularityDay();
        else if (this == PartitioningTimeGranularityMonth) onPartitioningTimeGranularityMonth();
        else if (this == PartitioningTimeGranularityYear) onPartitioningTimeGranularityYear();
        else otherwise(Value);
    }
}
