using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The text alignment of the quote. Defaults depend on the variant.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TextAlignment14>))]
public sealed record TextAlignment14 : OpenStringEnum<TextAlignment14>
{
    private TextAlignment14(string value) : base(value)
    {
    }

    public static readonly TextAlignment14 Left = new("left");

    public static readonly TextAlignment14 Center = new("center");

    public static readonly TextAlignment14 Right = new("right");

    public TResult Match<TResult>(Func<TResult> onLeft,
        Func<TResult> onCenter,
        Func<TResult> onRight,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Left => onLeft(),
            _ when this == Center => onCenter(),
            _ when this == Right => onRight(),
            _ => otherwise(Value)
        };

    public void Match(Action onLeft, Action onCenter, Action onRight, Action<string> otherwise)
    {
        if (this == Left) onLeft();
        else if (this == Center) onCenter();
        else if (this == Right) onRight();
        else otherwise(Value);
    }
}
