using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Level1>))]
public sealed record Level1 : OpenStringEnum<Level1>
{
    private Level1(string value) : base(value)
    {
    }

    public static readonly Level1 High = new("HIGH");

    public static readonly Level1 Medium = new("MEDIUM");

    public static readonly Level1 Low = new("LOW");

    public static readonly Level1 VeryLow = new("VERY LOW");

    public TResult Match<TResult>(Func<TResult> onHigh,
        Func<TResult> onMedium,
        Func<TResult> onLow,
        Func<TResult> onVeryLow,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == High => onHigh(),
            _ when this == Medium => onMedium(),
            _ when this == Low => onLow(),
            _ when this == VeryLow => onVeryLow(),
            _ => otherwise(Value)
        };

    public void Match(Action onHigh, Action onMedium, Action onLow, Action onVeryLow, Action<string> otherwise)
    {
        if (this == High) onHigh();
        else if (this == Medium) onMedium();
        else if (this == Low) onLow();
        else if (this == VeryLow) onVeryLow();
        else otherwise(Value);
    }
}
