using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

/// <summary>
/// Determines which fields are required: individual contacts require a name, company contacts require company_name.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContactType1>))]
public sealed record ContactType1 : OpenStringEnum<ContactType1>
{
    private ContactType1(string value) : base(value)
    {
    }

    public static readonly ContactType1 Individual = new("individual");

    public static readonly ContactType1 Company = new("company");

    public TResult Match<TResult>(Func<TResult> onIndividual,
        Func<TResult> onCompany,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Individual => onIndividual(),
            _ when this == Company => onCompany(),
            _ => otherwise(Value)
        };

    public void Match(Action onIndividual, Action onCompany, Action<string> otherwise)
    {
        if (this == Individual) onIndividual();
        else if (this == Company) onCompany();
        else otherwise(Value);
    }
}
