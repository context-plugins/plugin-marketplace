using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Product>))]
public sealed record Product : OpenStringEnum<Product>
{
    private Product(string value) : base(value)
    {
    }

    public static readonly Product I = new("I");

    public static readonly Product D = new("D");

    public static readonly Product Co = new("CO");

    public static readonly Product Oco = new("OCO");

    public static readonly Product Mtf = new("MTF");

    public TResult Match<TResult>(Func<TResult> onI,
        Func<TResult> onD,
        Func<TResult> onCo,
        Func<TResult> onOco,
        Func<TResult> onMtf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == I => onI(),
            _ when this == D => onD(),
            _ when this == Co => onCo(),
            _ when this == Oco => onOco(),
            _ when this == Mtf => onMtf(),
            _ => otherwise(Value)
        };

    public void Match(Action onI, Action onD, Action onCo, Action onOco, Action onMtf, Action<string> otherwise)
    {
        if (this == I) onI();
        else if (this == D) onD();
        else if (this == Co) onCo();
        else if (this == Oco) onOco();
        else if (this == Mtf) onMtf();
        else otherwise(Value);
    }
}
