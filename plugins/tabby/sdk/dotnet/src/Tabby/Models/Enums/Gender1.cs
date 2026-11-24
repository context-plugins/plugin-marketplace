using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// Who the goods are designed to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Gender1>))]
public sealed record Gender1 : OpenStringEnum<Gender1>
{
    private Gender1(string value) : base(value)
    {
    }

    public static readonly Gender1 Male = new("Male");

    public static readonly Gender1 Female = new("Female");

    public static readonly Gender1 Kids = new("Kids");

    public static readonly Gender1 Other = new("Other");

    public TResult Match<TResult>(Func<TResult> onMale,
        Func<TResult> onFemale,
        Func<TResult> onKids,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Male => onMale(),
            _ when this == Female => onFemale(),
            _ when this == Kids => onKids(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onMale, Action onFemale, Action onKids, Action onOther, Action<string> otherwise)
    {
        if (this == Male) onMale();
        else if (this == Female) onFemale();
        else if (this == Kids) onKids();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
