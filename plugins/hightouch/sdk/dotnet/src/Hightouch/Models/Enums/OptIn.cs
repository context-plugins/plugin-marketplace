using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// Force an opt-in style. Omit to let the topic and channel decide; a value
/// they cannot honor is refused rather than silently resolved.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OptIn>))]
public sealed record OptIn : OpenStringEnum<OptIn>
{
    private OptIn(string value) : base(value)
    {
    }

    public static readonly OptIn Single = new("single");

    public static readonly OptIn Double = new("double");

    public TResult Match<TResult>(Func<TResult> onSingle, Func<TResult> onDouble, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Single => onSingle(),
            _ when this == Double => onDouble(),
            _ => otherwise(Value)
        };

    public void Match(Action onSingle, Action onDouble, Action<string> otherwise)
    {
        if (this == Single) onSingle();
        else if (this == Double) onDouble();
        else otherwise(Value);
    }
}
