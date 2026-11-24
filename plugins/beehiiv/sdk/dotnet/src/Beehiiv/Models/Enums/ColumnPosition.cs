using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ColumnPosition>))]
public sealed record ColumnPosition : OpenStringEnum<ColumnPosition>
{
    private ColumnPosition(string value) : base(value)
    {
    }

    public static readonly ColumnPosition Left = new("left");

    public static readonly ColumnPosition Right = new("right");

    public TResult Match<TResult>(Func<TResult> onLeft, Func<TResult> onRight, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Left => onLeft(),
            _ when this == Right => onRight(),
            _ => otherwise(Value)
        };

    public void Match(Action onLeft, Action onRight, Action<string> otherwise)
    {
        if (this == Left) onLeft();
        else if (this == Right) onRight();
        else otherwise(Value);
    }
}
