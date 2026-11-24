using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Units>))]
public sealed record Units : OpenStringEnum<Units>
{
    private Units(string value) : base(value)
    {
    }

    public static readonly Units Km = new("km");

    public static readonly Units Mi = new("mi");

    public TResult Match<TResult>(Func<TResult> onKm, Func<TResult> onMi, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Km => onKm(),
            _ when this == Mi => onMi(),
            _ => otherwise(Value)
        };

    public void Match(Action onKm, Action onMi, Action<string> otherwise)
    {
        if (this == Km) onKm();
        else if (this == Mi) onMi();
        else otherwise(Value);
    }
}
