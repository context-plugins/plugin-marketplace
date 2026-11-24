using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Enum;

namespace MicrosoftDynamicsNav.Models.Enums;

/// <summary>
/// The customer type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDynamics365BusinessCentralApiV20CustomersApi>))]
public sealed record TypeDynamics365BusinessCentralApiV20CustomersApi : OpenStringEnum<TypeDynamics365BusinessCentralApiV20CustomersApi>
{
    private TypeDynamics365BusinessCentralApiV20CustomersApi(string value) : base(value)
    {
    }

    public static readonly TypeDynamics365BusinessCentralApiV20CustomersApi Person = new("Person");

    public static readonly TypeDynamics365BusinessCentralApiV20CustomersApi Company = new("Company");

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
