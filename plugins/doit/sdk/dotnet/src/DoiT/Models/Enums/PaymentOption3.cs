using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Payment structure for projected purchases. May be null when not set on the stored projection.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentOption3>))]
public sealed record PaymentOption3 : OpenStringEnum<PaymentOption3>
{
    private PaymentOption3(string value) : base(value)
    {
    }

    public static readonly PaymentOption3 NoUpfront = new("no_upfront");

    public static readonly PaymentOption3 PartialUpfront = new("partial_upfront");

    public static readonly PaymentOption3 AllUpfront = new("all_upfront");

    public TResult Match<TResult>(Func<TResult> onNoUpfront,
        Func<TResult> onPartialUpfront,
        Func<TResult> onAllUpfront,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoUpfront => onNoUpfront(),
            _ when this == PartialUpfront => onPartialUpfront(),
            _ when this == AllUpfront => onAllUpfront(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoUpfront, Action onPartialUpfront, Action onAllUpfront, Action<string> otherwise)
    {
        if (this == NoUpfront) onNoUpfront();
        else if (this == PartialUpfront) onPartialUpfront();
        else if (this == AllUpfront) onAllUpfront();
        else otherwise(Value);
    }
}
