using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IdentityRole5>))]
public sealed record IdentityRole5 : OpenStringEnum<IdentityRole5>
{
    private IdentityRole5(string value) : base(value)
    {
    }

    public static readonly IdentityRole5 Buyer = new("BUYER");

    public TResult Match<TResult>(Func<TResult> onBuyer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Buyer => onBuyer(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuyer, Action<string> otherwise)
    {
        if (this == Buyer) onBuyer();
        else otherwise(Value);
    }
}
