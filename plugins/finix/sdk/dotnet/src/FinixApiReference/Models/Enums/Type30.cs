using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of <c>Settlement</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type30>))]
public sealed record Type30 : OpenStringEnum<Type30>
{
    private Type30(string value) : base(value)
    {
    }

    public static readonly Type30 MerchantRevenue = new("MERCHANT_REVENUE");

    public static readonly Type30 PlatformFee = new("PLATFORM_FEE");

    public static readonly Type30 PartnerFee = new("PARTNER_FEE");

    public static readonly Type30 Noop = new("NOOP");

    public static readonly Type30 Merchant = new("MERCHANT");

    public static readonly Type30 Application = new("APPLICATION");

    public static readonly Type30 Platform = new("PLATFORM");

    public TResult Match<TResult>(Func<TResult> onMerchantRevenue,
        Func<TResult> onPlatformFee,
        Func<TResult> onPartnerFee,
        Func<TResult> onNoop,
        Func<TResult> onMerchant,
        Func<TResult> onApplication,
        Func<TResult> onPlatform,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MerchantRevenue => onMerchantRevenue(),
            _ when this == PlatformFee => onPlatformFee(),
            _ when this == PartnerFee => onPartnerFee(),
            _ when this == Noop => onNoop(),
            _ when this == Merchant => onMerchant(),
            _ when this == Application => onApplication(),
            _ when this == Platform => onPlatform(),
            _ => otherwise(Value)
        };

    public void Match(Action onMerchantRevenue,
        Action onPlatformFee,
        Action onPartnerFee,
        Action onNoop,
        Action onMerchant,
        Action onApplication,
        Action onPlatform,
        Action<string> otherwise)
    {
        if (this == MerchantRevenue) onMerchantRevenue();
        else if (this == PlatformFee) onPlatformFee();
        else if (this == PartnerFee) onPartnerFee();
        else if (this == Noop) onNoop();
        else if (this == Merchant) onMerchant();
        else if (this == Application) onApplication();
        else if (this == Platform) onPlatform();
        else otherwise(Value);
    }
}
