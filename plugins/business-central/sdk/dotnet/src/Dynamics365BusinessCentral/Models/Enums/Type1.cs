using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Person = new("Person");

    public static readonly Type1 Company = new("Company");

    public TResult Match<TResult>(Func<TResult> onPerson, Func<TResult> onCompany, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Person => onPerson(),
            _ when this == Company => onCompany(),
            _ => otherwise(Value)
        };

    public void Match(Action onPerson, Action onCompany, Action<string> otherwise)
    {
        if (this == Person) onPerson();
        else if (this == Company) onCompany();
        else otherwise(Value);
    }
}
