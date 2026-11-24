using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Invoice status enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InvoiceStatus>))]
public sealed record InvoiceStatus : OpenStringEnum<InvoiceStatus>
{
    private InvoiceStatus(string value) : base(value)
    {
    }

    public static readonly InvoiceStatus PaidInFull = new("PAID_IN_FULL");

    public static readonly InvoiceStatus Open = new("OPEN");

    public static readonly InvoiceStatus PartialPayment = new("PARTIAL_PAYMENT");

    public static readonly InvoiceStatus Scheduled = new("SCHEDULED");

    public static readonly InvoiceStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onPaidInFull,
        Func<TResult> onOpen,
        Func<TResult> onPartialPayment,
        Func<TResult> onScheduled,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaidInFull => onPaidInFull(),
            _ when this == Open => onOpen(),
            _ when this == PartialPayment => onPartialPayment(),
            _ when this == Scheduled => onScheduled(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaidInFull,
        Action onOpen,
        Action onPartialPayment,
        Action onScheduled,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == PaidInFull) onPaidInFull();
        else if (this == Open) onOpen();
        else if (this == PartialPayment) onPartialPayment();
        else if (this == Scheduled) onScheduled();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
