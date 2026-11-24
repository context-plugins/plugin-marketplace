using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Severity of the recipe's results, set by the recipe's author.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Severity>))]
public sealed record Severity : OpenStringEnum<Severity>
{
    private Severity(string value) : base(value)
    {
    }

    public static readonly Severity Critical = new("critical");

    public static readonly Severity High = new("high");

    public static readonly Severity Medium = new("medium");

    public static readonly Severity Low = new("low");

    public TResult Match<TResult>(Func<TResult> onCritical,
        Func<TResult> onHigh,
        Func<TResult> onMedium,
        Func<TResult> onLow,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Critical => onCritical(),
            _ when this == High => onHigh(),
            _ when this == Medium => onMedium(),
            _ when this == Low => onLow(),
            _ => otherwise(Value)
        };

    public void Match(Action onCritical, Action onHigh, Action onMedium, Action onLow, Action<string> otherwise)
    {
        if (this == Critical) onCritical();
        else if (this == High) onHigh();
        else if (this == Medium) onMedium();
        else if (this == Low) onLow();
        else otherwise(Value);
    }
}
