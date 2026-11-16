using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IdentityRole6>))]
public sealed record IdentityRole6 : OpenStringEnum<IdentityRole6>
{
    private IdentityRole6(string value) : base(value)
    {
    }

    public static readonly IdentityRole6 Recipient = new("RECIPIENT");

    public static readonly IdentityRole6 Sender = new("SENDER");

    public TResult Match<TResult>(Func<TResult> onRecipient, Func<TResult> onSender, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Recipient => onRecipient(),
            _ when this == Sender => onSender(),
            _ => otherwise(Value)
        };

    public void Match(Action onRecipient, Action onSender, Action<string> otherwise)
    {
        if (this == Recipient) onRecipient();
        else if (this == Sender) onSender();
        else otherwise(Value);
    }
}
