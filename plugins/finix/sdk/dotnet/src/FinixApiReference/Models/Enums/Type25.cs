using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of receipt, either for the customer (<c>BUYER</c>) or the merchant (<c>MERCHANT</c>) for a CP (card-present) transaction. For a CNP transaction, the <c>type</c> will be <c>BUYER</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type25>))]
public sealed record Type25 : OpenStringEnum<Type25>
{
    private Type25(string value) : base(value)
    {
    }

    public static readonly Type25 Buyer = new("BUYER");

    public static readonly Type25 Merchant = new("MERCHANT");

    public TResult Match<TResult>(Func<TResult> onBuyer, Func<TResult> onMerchant, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Buyer => onBuyer(),
            _ when this == Merchant => onMerchant(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuyer, Action onMerchant, Action<string> otherwise)
    {
        if (this == Buyer) onBuyer();
        else if (this == Merchant) onMerchant();
        else otherwise(Value);
    }
}
