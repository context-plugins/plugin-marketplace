using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The owner type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Account = new("account");

    public static readonly TypeEnum Organization = new("organization");

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
