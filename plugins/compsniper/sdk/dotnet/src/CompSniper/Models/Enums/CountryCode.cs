using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CountryCode>))]
public sealed record CountryCode : OpenStringEnum<CountryCode>
{
    private CountryCode(string value) : base(value)
    {
    }

    public static readonly CountryCode Us = new("US");

    public TResult Match<TResult>(Func<TResult> onUs, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Us => onUs(),
            _ => otherwise(Value)
        };

    public void Match(Action onUs, Action<string> otherwise)
    {
        if (this == Us) onUs();
        else otherwise(Value);
    }
}
