using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Transfer mode used by the payer.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Neft = new("NEFT");

    public static readonly Mode Rtgs = new("RTGS");

    public static readonly Mode Imps = new("IMPS");

    public static readonly Mode Upi = new("UPI");

    public TResult Match<TResult>(Func<TResult> onNeft,
        Func<TResult> onRtgs,
        Func<TResult> onImps,
        Func<TResult> onUpi,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Neft => onNeft(),
            _ when this == Rtgs => onRtgs(),
            _ when this == Imps => onImps(),
            _ when this == Upi => onUpi(),
            _ => otherwise(Value)
        };

    public void Match(Action onNeft, Action onRtgs, Action onImps, Action onUpi, Action<string> otherwise)
    {
        if (this == Neft) onNeft();
        else if (this == Rtgs) onRtgs();
        else if (this == Imps) onImps();
        else if (this == Upi) onUpi();
        else otherwise(Value);
    }
}
