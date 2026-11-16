using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details the type of resource getting verified.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type17>))]
public sealed record Type17 : OpenStringEnum<Type17>
{
    private Type17(string value) : base(value)
    {
    }

    public static readonly Type17 Merchant = new("MERCHANT");

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
