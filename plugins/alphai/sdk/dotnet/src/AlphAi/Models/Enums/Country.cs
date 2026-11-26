using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Country>))]
public sealed record Country : OpenStringEnum<Country>
{
    private Country(string value) : base(value)
    {
    }

    public static readonly Country Us = new("US");

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
