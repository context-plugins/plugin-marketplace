using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The vertical alignment of the column content.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ColumnVerticalAlignment2>))]
public sealed record ColumnVerticalAlignment2 : OpenStringEnum<ColumnVerticalAlignment2>
{
    private ColumnVerticalAlignment2(string value) : base(value)
    {
    }

    public static readonly ColumnVerticalAlignment2 Top = new("top");

    public static readonly ColumnVerticalAlignment2 Middle = new("middle");

    public static readonly ColumnVerticalAlignment2 Bottom = new("bottom");

    public TResult Match<TResult>(Func<TResult> onTop,
        Func<TResult> onMiddle,
        Func<TResult> onBottom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Top => onTop(),
            _ when this == Middle => onMiddle(),
            _ when this == Bottom => onBottom(),
            _ => otherwise(Value)
        };

    public void Match(Action onTop, Action onMiddle, Action onBottom, Action<string> otherwise)
    {
        if (this == Top) onTop();
        else if (this == Middle) onMiddle();
        else if (this == Bottom) onBottom();
        else otherwise(Value);
    }
}
