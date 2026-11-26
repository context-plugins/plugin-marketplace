using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// CustomerAccountType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomerAccountTypeResponse>))]
public sealed record CustomerAccountTypeResponse : OpenStringEnum<CustomerAccountTypeResponse>
{
    private CustomerAccountTypeResponse(string value) : base(value)
    {
    }

    public static readonly CustomerAccountTypeResponse None = new("NONE");

    public static readonly CustomerAccountTypeResponse Business = new("BUSINESS");

    public static readonly CustomerAccountTypeResponse Person = new("PERSON");

    public static readonly CustomerAccountTypeResponse Undefined = new("UNDEFINED");

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
