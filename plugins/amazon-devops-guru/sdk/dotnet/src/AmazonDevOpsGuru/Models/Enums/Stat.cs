using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The type of statistic associated with the CloudWatch metric. For more information, see Statistics in the Amazon CloudWatch User Guide.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Stat>))]
public sealed record Stat : OpenStringEnum<Stat>
{
    private Stat(string value) : base(value)
    {
    }

    public static readonly Stat Sum = new("Sum");

    public static readonly Stat Average = new("Average");

    public static readonly Stat SampleCount = new("SampleCount");

    public static readonly Stat Minimum = new("Minimum");

    public static readonly Stat Maximum = new("Maximum");

    public static readonly Stat P99 = new("p99");

    public static readonly Stat P90 = new("p90");

    public static readonly Stat P50 = new("p50");

    public TResult Match<TResult>(Func<TResult> onSum,
        Func<TResult> onAverage,
        Func<TResult> onSampleCount,
        Func<TResult> onMinimum,
        Func<TResult> onMaximum,
        Func<TResult> onP99,
        Func<TResult> onP90,
        Func<TResult> onP50,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sum => onSum(),
            _ when this == Average => onAverage(),
            _ when this == SampleCount => onSampleCount(),
            _ when this == Minimum => onMinimum(),
            _ when this == Maximum => onMaximum(),
            _ when this == P99 => onP99(),
            _ when this == P90 => onP90(),
            _ when this == P50 => onP50(),
            _ => otherwise(Value)
        };

    public void Match(Action onSum,
        Action onAverage,
        Action onSampleCount,
        Action onMinimum,
        Action onMaximum,
        Action onP99,
        Action onP90,
        Action onP50,
        Action<string> otherwise)
    {
        if (this == Sum) onSum();
        else if (this == Average) onAverage();
        else if (this == SampleCount) onSampleCount();
        else if (this == Minimum) onMinimum();
        else if (this == Maximum) onMaximum();
        else if (this == P99) onP99();
        else if (this == P90) onP90();
        else if (this == P50) onP50();
        else otherwise(Value);
    }
}
