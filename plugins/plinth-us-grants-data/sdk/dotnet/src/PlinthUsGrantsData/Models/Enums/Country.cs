using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

/// <summary>
/// The register the row came from. Present on every row, so no result is currency-ambiguous.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Country>))]
public sealed record Country : OpenStringEnum<Country>
{
    private Country(string value) : base(value)
    {
    }

    public static readonly Country Us = new("US");

    public static readonly Country Ca = new("CA");

    public TResult Match<TResult>(Func<TResult> onUs, Func<TResult> onCa, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Us => onUs(),
            _ when this == Ca => onCa(),
            _ => otherwise(Value)
        };

    public void Match(Action onUs, Action onCa, Action<string> otherwise)
    {
        if (this == Us) onUs();
        else if (this == Ca) onCa();
        else otherwise(Value);
    }
}
