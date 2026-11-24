using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ColumnVerticalAlignment>))]
public sealed record ColumnVerticalAlignment : OpenStringEnum<ColumnVerticalAlignment>
{
    private ColumnVerticalAlignment(string value) : base(value)
    {
    }

    public static readonly ColumnVerticalAlignment Top = new("top");

    public static readonly ColumnVerticalAlignment Middle = new("middle");

    public static readonly ColumnVerticalAlignment Bottom = new("bottom");

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
