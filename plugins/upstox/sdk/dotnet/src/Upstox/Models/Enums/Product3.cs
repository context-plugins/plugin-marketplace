using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Signifies if the order was either Intraday, Delivery or MTF
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Product3>))]
public sealed record Product3 : OpenStringEnum<Product3>
{
    private Product3(string value) : base(value)
    {
    }

    public static readonly Product3 I = new("I");

    public static readonly Product3 D = new("D");

    public static readonly Product3 Mtf = new("MTF");

    public TResult Match<TResult>(Func<TResult> onI,
        Func<TResult> onD,
        Func<TResult> onMtf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == I => onI(),
            _ when this == D => onD(),
            _ when this == Mtf => onMtf(),
            _ => otherwise(Value)
        };

    public void Match(Action onI, Action onD, Action onMtf, Action<string> otherwise)
    {
        if (this == I) onI();
        else if (this == D) onD();
        else if (this == Mtf) onMtf();
        else otherwise(Value);
    }
}
