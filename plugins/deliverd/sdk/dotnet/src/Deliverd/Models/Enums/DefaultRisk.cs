using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// The urgency an approval inherits when the caller declares none
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DefaultRisk>))]
public sealed record DefaultRisk : OpenStringEnum<DefaultRisk>
{
    private DefaultRisk(string value) : base(value)
    {
    }

    public static readonly DefaultRisk Low = new("low");

    public static readonly DefaultRisk Medium = new("medium");

    public static readonly DefaultRisk High = new("high");

    public static readonly DefaultRisk Critical = new("critical");

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
