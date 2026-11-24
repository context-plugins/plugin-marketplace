using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Legacy paragraph alignment field. Use <c>textAlignment</c> for new integrations.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TextAlignment2>))]
public sealed record TextAlignment2 : OpenStringEnum<TextAlignment2>
{
    private TextAlignment2(string value) : base(value)
    {
    }

    public static readonly TextAlignment2 Left = new("left");

    public static readonly TextAlignment2 Center = new("center");

    public static readonly TextAlignment2 Right = new("right");

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
