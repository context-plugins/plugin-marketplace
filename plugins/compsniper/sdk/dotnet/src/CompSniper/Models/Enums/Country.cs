using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Depop marketplace
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Country>))]
public sealed record Country : OpenStringEnum<Country>
{
    private Country(string value) : base(value)
    {
    }

    public static readonly Country Us = new("us");

    public static readonly Country Gb = new("gb");

    public static readonly Country Au = new("au");

    public static readonly Country Ca = new("ca");

    public TResult Match<TResult>(Func<TResult> onUs,
        Func<TResult> onGb,
        Func<TResult> onAu,
        Func<TResult> onCa,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Us => onUs(),
            _ when this == Gb => onGb(),
            _ when this == Au => onAu(),
            _ when this == Ca => onCa(),
            _ => otherwise(Value)
        };

    public void Match(Action onUs, Action onGb, Action onAu, Action onCa, Action<string> otherwise)
    {
        if (this == Us) onUs();
        else if (this == Gb) onGb();
        else if (this == Au) onAu();
        else if (this == Ca) onCa();
        else otherwise(Value);
    }
}
