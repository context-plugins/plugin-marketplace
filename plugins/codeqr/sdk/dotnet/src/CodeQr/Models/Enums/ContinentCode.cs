using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The continent to retrieve analytics for.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContinentCode>))]
public sealed record ContinentCode : OpenStringEnum<ContinentCode>
{
    private ContinentCode(string value) : base(value)
    {
    }

    public static readonly ContinentCode Af = new("AF");

    public static readonly ContinentCode An = new("AN");

    public static readonly ContinentCode As = new("AS");

    public static readonly ContinentCode Eu = new("EU");

    public static readonly ContinentCode Na = new("NA");

    public static readonly ContinentCode Oc = new("OC");

    public static readonly ContinentCode Sa = new("SA");

    public TResult Match<TResult>(Func<TResult> onAf,
        Func<TResult> onAn,
        Func<TResult> onAs,
        Func<TResult> onEu,
        Func<TResult> onNa,
        Func<TResult> onOc,
        Func<TResult> onSa,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Af => onAf(),
            _ when this == An => onAn(),
            _ when this == As => onAs(),
            _ when this == Eu => onEu(),
            _ when this == Na => onNa(),
            _ when this == Oc => onOc(),
            _ when this == Sa => onSa(),
            _ => otherwise(Value)
        };

    public void Match(Action onAf,
        Action onAn,
        Action onAs,
        Action onEu,
        Action onNa,
        Action onOc,
        Action onSa,
        Action<string> otherwise)
    {
        if (this == Af) onAf();
        else if (this == An) onAn();
        else if (this == As) onAs();
        else if (this == Eu) onEu();
        else if (this == Na) onNa();
        else if (this == Oc) onOc();
        else if (this == Sa) onSa();
        else otherwise(Value);
    }
}
