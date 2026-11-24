using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The column position. This field is deprecated but supported for existing column layouts.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ColumnPosition1>))]
public sealed record ColumnPosition1 : OpenStringEnum<ColumnPosition1>
{
    private ColumnPosition1(string value) : base(value)
    {
    }

    public static readonly ColumnPosition1 Left = new("left");

    public static readonly ColumnPosition1 Right = new("right");

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
