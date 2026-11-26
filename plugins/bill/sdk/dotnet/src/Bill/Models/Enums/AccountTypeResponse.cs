using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// AccountType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AccountTypeResponse>))]
public sealed record AccountTypeResponse : OpenStringEnum<AccountTypeResponse>
{
    private AccountTypeResponse(string value) : base(value)
    {
    }

    public static readonly AccountTypeResponse None = new("NONE");

    public static readonly AccountTypeResponse Business = new("BUSINESS");

    public static readonly AccountTypeResponse Person = new("PERSON");

    public static readonly AccountTypeResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onBusiness,
        Func<TResult> onPerson,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Business => onBusiness(),
            _ when this == Person => onPerson(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onBusiness, Action onPerson, Action onUndefined, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Business) onBusiness();
        else if (this == Person) onPerson();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
