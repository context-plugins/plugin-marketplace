using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role Admin = new("ADMIN");

    public static readonly Role Customer = new("CUSTOMER");

    public TResult Match<TResult>(Func<TResult> onAdmin, Func<TResult> onCustomer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Admin => onAdmin(),
            _ when this == Customer => onCustomer(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdmin, Action onCustomer, Action<string> otherwise)
    {
        if (this == Admin) onAdmin();
        else if (this == Customer) onCustomer();
        else otherwise(Value);
    }
}
