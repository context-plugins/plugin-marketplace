using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IdentityRole>))]
public sealed record IdentityRole : OpenStringEnum<IdentityRole>
{
    private IdentityRole(string value) : base(value)
    {
    }

    public static readonly IdentityRole ApplicationOwner = new("APPLICATION_OWNER");

    public static readonly IdentityRole BeneficialOwner = new("BENEFICIAL_OWNER");

    public static readonly IdentityRole Buyer = new("BUYER");

    public static readonly IdentityRole PlatformOwner = new("PLATFORM_OWNER");

    public static readonly IdentityRole Recipient = new("RECIPIENT");

    public static readonly IdentityRole Seller = new("SELLER");

    public static readonly IdentityRole Sender = new("SENDER");

    public TResult Match<TResult>(Func<TResult> onApplicationOwner,
        Func<TResult> onBeneficialOwner,
        Func<TResult> onBuyer,
        Func<TResult> onPlatformOwner,
        Func<TResult> onRecipient,
        Func<TResult> onSeller,
        Func<TResult> onSender,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApplicationOwner => onApplicationOwner(),
            _ when this == BeneficialOwner => onBeneficialOwner(),
            _ when this == Buyer => onBuyer(),
            _ when this == PlatformOwner => onPlatformOwner(),
            _ when this == Recipient => onRecipient(),
            _ when this == Seller => onSeller(),
            _ when this == Sender => onSender(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplicationOwner,
        Action onBeneficialOwner,
        Action onBuyer,
        Action onPlatformOwner,
        Action onRecipient,
        Action onSeller,
        Action onSender,
        Action<string> otherwise)
    {
        if (this == ApplicationOwner) onApplicationOwner();
        else if (this == BeneficialOwner) onBeneficialOwner();
        else if (this == Buyer) onBuyer();
        else if (this == PlatformOwner) onPlatformOwner();
        else if (this == Recipient) onRecipient();
        else if (this == Seller) onSeller();
        else if (this == Sender) onSender();
        else otherwise(Value);
    }
}
