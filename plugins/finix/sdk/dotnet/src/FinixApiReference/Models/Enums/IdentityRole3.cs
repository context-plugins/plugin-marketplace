using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IdentityRole3>))]
public sealed record IdentityRole3 : OpenStringEnum<IdentityRole3>
{
    private IdentityRole3(string value) : base(value)
    {
    }

    public static readonly IdentityRole3 Recipient = new("RECIPIENT");

    public TResult Match<TResult>(Func<TResult> onRecipient, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Recipient => onRecipient(),
            _ => otherwise(Value)
        };

    public void Match(Action onRecipient, Action<string> otherwise)
    {
        if (this == Recipient) onRecipient();
        else otherwise(Value);
    }
}
