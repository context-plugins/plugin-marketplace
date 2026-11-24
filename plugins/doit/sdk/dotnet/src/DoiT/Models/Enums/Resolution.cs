using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Required when <c>reviewStatus</c> is <c>RESOLVED</c>; forbidden otherwise. Qualifies whether the anomaly was confirmed as real.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Resolution>))]
public sealed record Resolution : OpenStringEnum<Resolution>
{
    private Resolution(string value) : base(value)
    {
    }

    public static readonly Resolution AnomalyConfirmed = new("ANOMALY_CONFIRMED");

    public static readonly Resolution NotAnomaly = new("NOT_ANOMALY");

    public TResult Match<TResult>(Func<TResult> onAnomalyConfirmed,
        Func<TResult> onNotAnomaly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AnomalyConfirmed => onAnomalyConfirmed(),
            _ when this == NotAnomaly => onNotAnomaly(),
            _ => otherwise(Value)
        };

    public void Match(Action onAnomalyConfirmed, Action onNotAnomaly, Action<string> otherwise)
    {
        if (this == AnomalyConfirmed) onAnomalyConfirmed();
        else if (this == NotAnomaly) onNotAnomaly();
        else otherwise(Value);
    }
}
