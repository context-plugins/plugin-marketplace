using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of the resource that is specified in the <c>linked_to</c> field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LinkedType7>))]
public sealed record LinkedType7 : OpenStringEnum<LinkedType7>
{
    private LinkedType7(string value) : base(value)
    {
    }

    public static readonly LinkedType7 Merchant = new("MERCHANT");

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
