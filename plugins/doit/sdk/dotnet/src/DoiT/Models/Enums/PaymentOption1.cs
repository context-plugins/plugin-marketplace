using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Upfront payment structure for this Savings Plan.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentOption1>))]
public sealed record PaymentOption1 : OpenStringEnum<PaymentOption1>
{
    private PaymentOption1(string value) : base(value)
    {
    }

    public static readonly PaymentOption1 NoUpfront = new("no_upfront");

    public static readonly PaymentOption1 PartialUpfront = new("partial_upfront");

    public static readonly PaymentOption1 AllUpfront = new("all_upfront");

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
