using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Insurance = new("insurance");

    public static readonly TypeEnum NonInsurance = new("non_insurance");

    public static readonly TypeEnum Finance = new("finance");

    public static readonly TypeEnum Dealer = new("dealer");

    public static readonly TypeEnum Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onInsurance,
        Func<TResult> onNonInsurance,
        Func<TResult> onFinance,
        Func<TResult> onDealer,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Insurance => onInsurance(),
            _ when this == NonInsurance => onNonInsurance(),
            _ when this == Finance => onFinance(),
            _ when this == Dealer => onDealer(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onInsurance,
        Action onNonInsurance,
        Action onFinance,
        Action onDealer,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Insurance) onInsurance();
        else if (this == NonInsurance) onNonInsurance();
        else if (this == Finance) onFinance();
        else if (this == Dealer) onDealer();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
