using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, pink, brown.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Color1>))]
public sealed record Color1 : OpenStringEnum<Color1>
{
    private Color1(string value) : base(value)
    {
    }

    public static readonly Color1 Red = new("red");

    public static readonly Color1 Yellow = new("yellow");

    public static readonly Color1 Green = new("green");

    public static readonly Color1 Blue = new("blue");

    public static readonly Color1 Purple = new("purple");

    public static readonly Color1 Pink = new("pink");

    public static readonly Color1 Brown = new("brown");

    public TResult Match<TResult>(Func<TResult> onRed,
        Func<TResult> onYellow,
        Func<TResult> onGreen,
        Func<TResult> onBlue,
        Func<TResult> onPurple,
        Func<TResult> onPink,
        Func<TResult> onBrown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Red => onRed(),
            _ when this == Yellow => onYellow(),
            _ when this == Green => onGreen(),
            _ when this == Blue => onBlue(),
            _ when this == Purple => onPurple(),
            _ when this == Pink => onPink(),
            _ when this == Brown => onBrown(),
            _ => otherwise(Value)
        };

    public void Match(Action onRed,
        Action onYellow,
        Action onGreen,
        Action onBlue,
        Action onPurple,
        Action onPink,
        Action onBrown,
        Action<string> otherwise)
    {
        if (this == Red) onRed();
        else if (this == Yellow) onYellow();
        else if (this == Green) onGreen();
        else if (this == Blue) onBlue();
        else if (this == Purple) onPurple();
        else if (this == Pink) onPink();
        else if (this == Brown) onBrown();
        else otherwise(Value);
    }
}
