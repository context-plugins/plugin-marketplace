using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// How risky you judge it. Can raise, never lower, the action's own risk
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RiskDeliverdDevGatesApi>))]
public sealed record RiskDeliverdDevGatesApi : OpenStringEnum<RiskDeliverdDevGatesApi>
{
    private RiskDeliverdDevGatesApi(string value) : base(value)
    {
    }

    public static readonly RiskDeliverdDevGatesApi Low = new("low");

    public static readonly RiskDeliverdDevGatesApi Medium = new("medium");

    public static readonly RiskDeliverdDevGatesApi High = new("high");

    public static readonly RiskDeliverdDevGatesApi Critical = new("critical");

    public TResult Match<TResult>(Func<TResult> onLow,
        Func<TResult> onMedium,
        Func<TResult> onHigh,
        Func<TResult> onCritical,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Low => onLow(),
            _ when this == Medium => onMedium(),
            _ when this == High => onHigh(),
            _ when this == Critical => onCritical(),
            _ => otherwise(Value)
        };

    public void Match(Action onLow, Action onMedium, Action onHigh, Action onCritical, Action<string> otherwise)
    {
        if (this == Low) onLow();
        else if (this == Medium) onMedium();
        else if (this == High) onHigh();
        else if (this == Critical) onCritical();
        else otherwise(Value);
    }
}
