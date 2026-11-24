using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Whether the anomaly was confirmed as real. Present only when <c>reviewStatus</c> is <c>RESOLVED</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Resolution1>))]
public sealed record Resolution1 : OpenStringEnum<Resolution1>
{
    private Resolution1(string value) : base(value)
    {
    }

    public static readonly Resolution1 AnomalyConfirmed = new("ANOMALY_CONFIRMED");

    public static readonly Resolution1 NotAnomaly = new("NOT_ANOMALY");

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
