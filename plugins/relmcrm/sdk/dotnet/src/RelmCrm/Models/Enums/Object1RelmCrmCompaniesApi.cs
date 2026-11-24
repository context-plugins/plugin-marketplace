using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Object1RelmCrmCompaniesApi>))]
public sealed record Object1RelmCrmCompaniesApi : OpenStringEnum<Object1RelmCrmCompaniesApi>
{
    private Object1RelmCrmCompaniesApi(string value) : base(value)
    {
    }

    public static readonly Object1RelmCrmCompaniesApi Company = new("company");

    public TResult Match<TResult>(Func<TResult> onCompany, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Company => onCompany(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompany, Action<string> otherwise)
    {
        if (this == Company) onCompany();
        else otherwise(Value);
    }
}
