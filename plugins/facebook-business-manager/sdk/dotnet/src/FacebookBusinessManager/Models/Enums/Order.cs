using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Order>))]
public sealed record Order : OpenStringEnum<Order>
{
    private Order(string value) : base(value)
    {
    }

    public static readonly Order Chronological = new("chronological");

    public static readonly Order ReverseChronological = new("reverse_chronological");

    public TResult Match<TResult>(Func<TResult> onChronological,
        Func<TResult> onReverseChronological,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Chronological => onChronological(),
            _ when this == ReverseChronological => onReverseChronological(),
            _ => otherwise(Value)
        };

    public void Match(Action onChronological, Action onReverseChronological, Action<string> otherwise)
    {
        if (this == Chronological) onChronological();
        else if (this == ReverseChronological) onReverseChronological();
        else otherwise(Value);
    }
}
