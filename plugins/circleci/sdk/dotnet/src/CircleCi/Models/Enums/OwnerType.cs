using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OwnerType>))]
public sealed record OwnerType : OpenStringEnum<OwnerType>
{
    private OwnerType(string value) : base(value)
    {
    }

    public static readonly OwnerType Account = new("account");

    public static readonly OwnerType Organization = new("organization");

    public TResult Match<TResult>(Func<TResult> onAccount,
        Func<TResult> onOrganization,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Account => onAccount(),
            _ when this == Organization => onOrganization(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccount, Action onOrganization, Action<string> otherwise)
    {
        if (this == Account) onAccount();
        else if (this == Organization) onOrganization();
        else otherwise(Value);
    }
}
