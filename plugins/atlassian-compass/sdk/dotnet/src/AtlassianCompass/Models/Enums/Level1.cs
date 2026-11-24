using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// The severity level of the vulnerability
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Level1>))]
public sealed record Level1 : OpenStringEnum<Level1>
{
    private Level1(string value) : base(value)
    {
    }

    public static readonly Level1 Critical = new("CRITICAL");

    public static readonly Level1 High = new("HIGH");

    public static readonly Level1 Medium = new("MEDIUM");

    public static readonly Level1 Low = new("LOW");

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
