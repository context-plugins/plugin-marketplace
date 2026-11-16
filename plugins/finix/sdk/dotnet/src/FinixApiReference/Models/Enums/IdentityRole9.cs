using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IdentityRole9>))]
public sealed record IdentityRole9 : OpenStringEnum<IdentityRole9>
{
    private IdentityRole9(string value) : base(value)
    {
    }

    public static readonly IdentityRole9 ApplicationOwner = new("APPLICATION_OWNER");

    public static readonly IdentityRole9 Recipient = new("RECIPIENT");

    public static readonly IdentityRole9 Seller = new("SELLER");

    public TResult Match<TResult>(Func<TResult> onApplicationOwner,
        Func<TResult> onRecipient,
        Func<TResult> onSeller,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApplicationOwner => onApplicationOwner(),
            _ when this == Recipient => onRecipient(),
            _ when this == Seller => onSeller(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplicationOwner, Action onRecipient, Action onSeller, Action<string> otherwise)
    {
        if (this == ApplicationOwner) onApplicationOwner();
        else if (this == Recipient) onRecipient();
        else if (this == Seller) onSeller();
        else otherwise(Value);
    }
}
