using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Type of the resource to which the <c>Compliance Form</c> belongs.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LinkedType6>))]
public sealed record LinkedType6 : OpenStringEnum<LinkedType6>
{
    private LinkedType6(string value) : base(value)
    {
    }

    public static readonly LinkedType6 Merchant = new("MERCHANT");

    public TResult Match<TResult>(Func<TResult> onMerchant, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Merchant => onMerchant(),
            _ => otherwise(Value)
        };

    public void Match(Action onMerchant, Action<string> otherwise)
    {
        if (this == Merchant) onMerchant();
        else otherwise(Value);
    }
}
