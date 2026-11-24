using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ContactType>))]
public sealed record ContactType : OpenStringEnum<ContactType>
{
    private ContactType(string value) : base(value)
    {
    }

    public static readonly ContactType Individual = new("individual");

    public static readonly ContactType Company = new("company");

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
