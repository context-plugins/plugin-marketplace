using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of resource to which the <c>Gateway Integration</c> is linked.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LinkedType5>))]
public sealed record LinkedType5 : OpenStringEnum<LinkedType5>
{
    private LinkedType5(string value) : base(value)
    {
    }

    public static readonly LinkedType5 Merchant = new("MERCHANT");

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
