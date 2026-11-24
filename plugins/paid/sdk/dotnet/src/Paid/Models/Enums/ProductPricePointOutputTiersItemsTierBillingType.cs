using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ProductPricePointOutputTiersItemsTierBillingType>))]
public sealed record ProductPricePointOutputTiersItemsTierBillingType : OpenStringEnum<ProductPricePointOutputTiersItemsTierBillingType>
{
    private ProductPricePointOutputTiersItemsTierBillingType(string value) : base(value)
    {
    }

    public static readonly ProductPricePointOutputTiersItemsTierBillingType Flat = new("flat");

    public static readonly ProductPricePointOutputTiersItemsTierBillingType PerUnit = new("perUnit");

    public TResult Match<TResult>(Func<TResult> onFlat, Func<TResult> onPerUnit, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Flat => onFlat(),
            _ when this == PerUnit => onPerUnit(),
            _ => otherwise(Value)
        };

    public void Match(Action onFlat, Action onPerUnit, Action<string> otherwise)
    {
        if (this == Flat) onFlat();
        else if (this == PerUnit) onPerUnit();
        else otherwise(Value);
    }
}
