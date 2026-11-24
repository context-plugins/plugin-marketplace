using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The color of the tag
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Color2>))]
public sealed record Color2 : OpenStringEnum<Color2>
{
    private Color2(string value) : base(value)
    {
    }

    public static readonly Color2 Red = new("red");

    public static readonly Color2 Yellow = new("yellow");

    public static readonly Color2 Green = new("green");

    public static readonly Color2 Blue = new("blue");

    public static readonly Color2 Purple = new("purple");

    public static readonly Color2 Pink = new("pink");

    public static readonly Color2 Brown = new("brown");

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
