using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SellerType>))]
public sealed record SellerType : OpenStringEnum<SellerType>
{
    private SellerType(string value) : base(value)
    {
    }

    public static readonly SellerType Dealer = new("dealer");

    public static readonly SellerType Finance = new("finance");

    public static readonly SellerType Insurance = new("insurance");

    public static readonly SellerType NonInsurance = new("non_insurance");

    public TResult Match<TResult>(Func<TResult> onDealer,
        Func<TResult> onFinance,
        Func<TResult> onInsurance,
        Func<TResult> onNonInsurance,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Dealer => onDealer(),
            _ when this == Finance => onFinance(),
            _ when this == Insurance => onInsurance(),
            _ when this == NonInsurance => onNonInsurance(),
            _ => otherwise(Value)
        };

    public void Match(Action onDealer,
        Action onFinance,
        Action onInsurance,
        Action onNonInsurance,
        Action<string> otherwise)
    {
        if (this == Dealer) onDealer();
        else if (this == Finance) onFinance();
        else if (this == Insurance) onInsurance();
        else if (this == NonInsurance) onNonInsurance();
        else otherwise(Value);
    }
}
