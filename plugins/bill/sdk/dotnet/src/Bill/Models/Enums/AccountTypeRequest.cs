using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// AccountRequestType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AccountTypeRequest>))]
public sealed record AccountTypeRequest : OpenStringEnum<AccountTypeRequest>
{
    private AccountTypeRequest(string value) : base(value)
    {
    }

    public static readonly AccountTypeRequest None = new("NONE");

    public static readonly AccountTypeRequest Business = new("BUSINESS");

    public static readonly AccountTypeRequest Person = new("PERSON");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onBusiness,
        Func<TResult> onPerson,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Business => onBusiness(),
            _ when this == Person => onPerson(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onBusiness, Action onPerson, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Business) onBusiness();
        else if (this == Person) onPerson();
        else otherwise(Value);
    }
}
