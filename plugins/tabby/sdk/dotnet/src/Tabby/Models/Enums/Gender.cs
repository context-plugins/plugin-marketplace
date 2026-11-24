using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// F - female, M - male, O - other
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Gender>))]
public sealed record Gender : OpenStringEnum<Gender>
{
    private Gender(string value) : base(value)
    {
    }

    public static readonly Gender F = new("F");

    public static readonly Gender M = new("M");

    public static readonly Gender O = new("O");

    public TResult Match<TResult>(Func<TResult> onF,
        Func<TResult> onM,
        Func<TResult> onO,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == F => onF(),
            _ when this == M => onM(),
            _ when this == O => onO(),
            _ => otherwise(Value)
        };

    public void Match(Action onF, Action onM, Action onO, Action<string> otherwise)
    {
        if (this == F) onF();
        else if (this == M) onM();
        else if (this == O) onO();
        else otherwise(Value);
    }
}
