using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<QuantileDataStatus>))]
public sealed record QuantileDataStatus : OpenStringEnum<QuantileDataStatus>
{
    private QuantileDataStatus(string value) : base(value)
    {
    }

    public static readonly QuantileDataStatus QuantileDataStatusUnspecified = new("QUANTILE_DATA_STATUS_UNSPECIFIED");

    public static readonly QuantileDataStatus QuantileDataStatusCompleted = new("QUANTILE_DATA_STATUS_COMPLETED");

    public static readonly QuantileDataStatus QuantileDataStatusFailed = new("QUANTILE_DATA_STATUS_FAILED");

    public TResult Match<TResult>(Func<TResult> onQuantileDataStatusUnspecified,
        Func<TResult> onQuantileDataStatusCompleted,
        Func<TResult> onQuantileDataStatusFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == QuantileDataStatusUnspecified => onQuantileDataStatusUnspecified(),
            _ when this == QuantileDataStatusCompleted => onQuantileDataStatusCompleted(),
            _ when this == QuantileDataStatusFailed => onQuantileDataStatusFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onQuantileDataStatusUnspecified,
        Action onQuantileDataStatusCompleted,
        Action onQuantileDataStatusFailed,
        Action<string> otherwise)
    {
        if (this == QuantileDataStatusUnspecified) onQuantileDataStatusUnspecified();
        else if (this == QuantileDataStatusCompleted) onQuantileDataStatusCompleted();
        else if (this == QuantileDataStatusFailed) onQuantileDataStatusFailed();
        else otherwise(Value);
    }
}
