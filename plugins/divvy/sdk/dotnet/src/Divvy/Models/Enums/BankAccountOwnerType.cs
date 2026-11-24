using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// BankAccountOwnerType Enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BankAccountOwnerType>))]
public sealed record BankAccountOwnerType : OpenStringEnum<BankAccountOwnerType>
{
    private BankAccountOwnerType(string value) : base(value)
    {
    }

    public static readonly BankAccountOwnerType Business = new("BUSINESS");

    public static readonly BankAccountOwnerType Personal = new("PERSONAL");

    public TResult Match<TResult>(Func<TResult> onBusiness,
        Func<TResult> onPersonal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Business => onBusiness(),
            _ when this == Personal => onPersonal(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusiness, Action onPersonal, Action<string> otherwise)
    {
        if (this == Business) onBusiness();
        else if (this == Personal) onPersonal();
        else otherwise(Value);
    }
}
