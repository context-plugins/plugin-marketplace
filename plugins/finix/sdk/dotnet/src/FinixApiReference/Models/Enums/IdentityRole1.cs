using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IdentityRole1>))]
public sealed record IdentityRole1 : OpenStringEnum<IdentityRole1>
{
    private IdentityRole1(string value) : base(value)
    {
    }

    public static readonly IdentityRole1 Seller = new("SELLER");

    public TResult Match<TResult>(Func<TResult> onSeller, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Seller => onSeller(),
            _ => otherwise(Value)
        };

    public void Match(Action onSeller, Action<string> otherwise)
    {
        if (this == Seller) onSeller();
        else otherwise(Value);
    }
}
