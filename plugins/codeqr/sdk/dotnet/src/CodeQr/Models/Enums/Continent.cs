using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The 2-letter ISO 3166-1 code representing the continent associated with the location of the user.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Continent>))]
public sealed record Continent : OpenStringEnum<Continent>
{
    private Continent(string value) : base(value)
    {
    }

    public static readonly Continent Af = new("AF");

    public static readonly Continent An = new("AN");

    public static readonly Continent As = new("AS");

    public static readonly Continent Eu = new("EU");

    public static readonly Continent Na = new("NA");

    public static readonly Continent Oc = new("OC");

    public static readonly Continent Sa = new("SA");

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
