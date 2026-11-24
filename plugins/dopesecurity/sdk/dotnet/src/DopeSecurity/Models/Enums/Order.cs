using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Enum;

namespace DopeSecurity.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Order>))]
public sealed record Order : OpenStringEnum<Order>
{
    private Order(string value) : base(value)
    {
    }

    public static readonly Order Desc = new("desc");

    public static readonly Order Asc = new("asc");

    public TResult Match<TResult>(Func<TResult> onDesc, Func<TResult> onAsc, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Desc => onDesc(),
            _ when this == Asc => onAsc(),
            _ => otherwise(Value)
        };

    public void Match(Action onDesc, Action onAsc, Action<string> otherwise)
    {
        if (this == Desc) onDesc();
        else if (this == Asc) onAsc();
        else otherwise(Value);
    }
}
