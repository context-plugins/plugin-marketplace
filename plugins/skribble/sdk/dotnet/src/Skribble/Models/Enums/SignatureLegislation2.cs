using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// The legislation under which this signer's signature was created. Only present after signing.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SignatureLegislation2>))]
public sealed record SignatureLegislation2 : OpenStringEnum<SignatureLegislation2>
{
    private SignatureLegislation2(string value) : base(value)
    {
    }

    public static readonly SignatureLegislation2 Zertes = new("ZERTES");

    public static readonly SignatureLegislation2 Eidas = new("EIDAS");

    public TResult Match<TResult>(Func<TResult> onZertes, Func<TResult> onEidas, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Zertes => onZertes(),
            _ when this == Eidas => onEidas(),
            _ => otherwise(Value)
        };

    public void Match(Action onZertes, Action onEidas, Action<string> otherwise)
    {
        if (this == Zertes) onZertes();
        else if (this == Eidas) onEidas();
        else otherwise(Value);
    }
}
