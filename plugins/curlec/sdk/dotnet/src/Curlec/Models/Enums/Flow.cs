using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Flow type for VPA receivers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Flow>))]
public sealed record Flow : OpenStringEnum<Flow>
{
    private Flow(string value) : base(value)
    {
    }

    public static readonly Flow UpiQr = new("upi_qr");

    public TResult Match<TResult>(Func<TResult> onUpiQr, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UpiQr => onUpiQr(),
            _ => otherwise(Value)
        };

    public void Match(Action onUpiQr, Action<string> otherwise)
    {
        if (this == UpiQr) onUpiQr();
        else otherwise(Value);
    }
}
