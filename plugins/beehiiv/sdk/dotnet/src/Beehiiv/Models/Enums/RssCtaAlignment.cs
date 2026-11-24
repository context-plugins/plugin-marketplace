using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The alignment of the call to action.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RssCtaAlignment>))]
public sealed record RssCtaAlignment : OpenStringEnum<RssCtaAlignment>
{
    private RssCtaAlignment(string value) : base(value)
    {
    }

    public static readonly RssCtaAlignment Left = new("Left");

    public static readonly RssCtaAlignment Center = new("Center");

    public static readonly RssCtaAlignment Right = new("Right");

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
