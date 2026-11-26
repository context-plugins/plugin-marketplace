using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Actionability>))]
public sealed record Actionability : OpenStringEnum<Actionability>
{
    private Actionability(string value) : base(value)
    {
    }

    public static readonly Actionability High = new("high");

    public static readonly Actionability Medium = new("medium");

    public static readonly Actionability Low = new("low");

    public static readonly Actionability Negligible = new("negligible");

    public TResult Match<TResult>(Func<TResult> onHigh,
        Func<TResult> onMedium,
        Func<TResult> onLow,
        Func<TResult> onNegligible,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == High => onHigh(),
            _ when this == Medium => onMedium(),
            _ when this == Low => onLow(),
            _ when this == Negligible => onNegligible(),
            _ => otherwise(Value)
        };

    public void Match(Action onHigh, Action onMedium, Action onLow, Action onNegligible, Action<string> otherwise)
    {
        if (this == High) onHigh();
        else if (this == Medium) onMedium();
        else if (this == Low) onLow();
        else if (this == Negligible) onNegligible();
        else otherwise(Value);
    }
}
