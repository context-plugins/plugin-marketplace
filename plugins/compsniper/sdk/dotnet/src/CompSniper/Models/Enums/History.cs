using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Market price history range
/// </summary>
[JsonConverter(typeof(StringEnumConverter<History>))]
public sealed record History : OpenStringEnum<History>
{
    private History(string value) : base(value)
    {
    }

    public static readonly History None = new("none");

    public static readonly History Month = new("month");

    public static readonly History Quarter = new("quarter");

    public static readonly History Annual = new("annual");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onMonth,
        Func<TResult> onQuarter,
        Func<TResult> onAnnual,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Month => onMonth(),
            _ when this == Quarter => onQuarter(),
            _ when this == Annual => onAnnual(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onMonth, Action onQuarter, Action onAnnual, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Month) onMonth();
        else if (this == Quarter) onQuarter();
        else if (this == Annual) onAnnual();
        else otherwise(Value);
    }
}
