using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The text alignment of the cell.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TextAlignment13>))]
public sealed record TextAlignment13 : OpenStringEnum<TextAlignment13>
{
    private TextAlignment13(string value) : base(value)
    {
    }

    public static readonly TextAlignment13 Left = new("left");

    public static readonly TextAlignment13 Center = new("center");

    public static readonly TextAlignment13 Right = new("right");

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
