using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// Who uses it: one person for their work, a team or function, or the whole organisation
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UseScope>))]
public sealed record UseScope : OpenStringEnum<UseScope>
{
    private UseScope(string value) : base(value)
    {
    }

    public static readonly UseScope Personal = new("personal");

    public static readonly UseScope Functional = new("functional");

    public static readonly UseScope Organisation = new("organisation");

    public TResult Match<TResult>(Func<TResult> onPersonal,
        Func<TResult> onFunctional,
        Func<TResult> onOrganisation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Personal => onPersonal(),
            _ when this == Functional => onFunctional(),
            _ when this == Organisation => onOrganisation(),
            _ => otherwise(Value)
        };

    public void Match(Action onPersonal, Action onFunctional, Action onOrganisation, Action<string> otherwise)
    {
        if (this == Personal) onPersonal();
        else if (this == Functional) onFunctional();
        else if (this == Organisation) onOrganisation();
        else otherwise(Value);
    }
}
