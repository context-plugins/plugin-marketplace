using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// CustomerAccountType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomerAccountTypeRequest>))]
public sealed record CustomerAccountTypeRequest : OpenStringEnum<CustomerAccountTypeRequest>
{
    private CustomerAccountTypeRequest(string value) : base(value)
    {
    }

    public static readonly CustomerAccountTypeRequest None = new("NONE");

    public static readonly CustomerAccountTypeRequest Business = new("BUSINESS");

    public static readonly CustomerAccountTypeRequest Person = new("PERSON");

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
