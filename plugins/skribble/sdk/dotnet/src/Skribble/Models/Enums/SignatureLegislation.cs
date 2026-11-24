using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// Legislation under which the signatures are created. Required when <c>quality</c> is <c>QES</c> or <c>AES_MINIMAL</c>.
/// <para>
/// | Legislation | Description |
/// | --- | --- |
/// | <b>ZERTES</b> | QES according to Swiss law. This is the <b>default</b>. |
/// | <b>EIDAS</b> | QES according to EU law. |
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SignatureLegislation>))]
public sealed record SignatureLegislation : OpenStringEnum<SignatureLegislation>
{
    private SignatureLegislation(string value) : base(value)
    {
    }

    public static readonly SignatureLegislation Zertes = new("ZERTES");

    public static readonly SignatureLegislation Eidas = new("EIDAS");

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
