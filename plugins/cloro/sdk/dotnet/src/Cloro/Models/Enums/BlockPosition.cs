using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Where the ad appeared on the SERP. <c>top</c>/<c>bottom</c> are text-ad blocks, <c>middle</c> covers direct/in-content ads, <c>rhs</c> is the right-hand-side sponsored-products carousel.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BlockPosition>))]
public sealed record BlockPosition : OpenStringEnum<BlockPosition>
{
    private BlockPosition(string value) : base(value)
    {
    }

    public static readonly BlockPosition Top = new("top");

    public static readonly BlockPosition Bottom = new("bottom");

    public static readonly BlockPosition Middle = new("middle");

    public static readonly BlockPosition Rhs = new("rhs");

    public TResult Match<TResult>(Func<TResult> onTop,
        Func<TResult> onBottom,
        Func<TResult> onMiddle,
        Func<TResult> onRhs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Top => onTop(),
            _ when this == Bottom => onBottom(),
            _ when this == Middle => onMiddle(),
            _ when this == Rhs => onRhs(),
            _ => otherwise(Value)
        };

    public void Match(Action onTop, Action onBottom, Action onMiddle, Action onRhs, Action<string> otherwise)
    {
        if (this == Top) onTop();
        else if (this == Bottom) onBottom();
        else if (this == Middle) onMiddle();
        else if (this == Rhs) onRhs();
        else otherwise(Value);
    }
}
