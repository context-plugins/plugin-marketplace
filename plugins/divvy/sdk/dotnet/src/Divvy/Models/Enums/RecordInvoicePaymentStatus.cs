using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Record Invoice payment status enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RecordInvoicePaymentStatus>))]
public sealed record RecordInvoicePaymentStatus : OpenStringEnum<RecordInvoicePaymentStatus>
{
    private RecordInvoicePaymentStatus(string value) : base(value)
    {
    }

    public static readonly RecordInvoicePaymentStatus Paid = new("PAID");

    public static readonly RecordInvoicePaymentStatus Void = new("VOID");

    public static readonly RecordInvoicePaymentStatus Scheduled = new("SCHEDULED");

    public static readonly RecordInvoicePaymentStatus Canceled = new("CANCELED");

    public static readonly RecordInvoicePaymentStatus Escheated = new("ESCHEATED");

    public static readonly RecordInvoicePaymentStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onPaid,
        Func<TResult> onVoid,
        Func<TResult> onScheduled,
        Func<TResult> onCanceled,
        Func<TResult> onEscheated,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Paid => onPaid(),
            _ when this == Void => onVoid(),
            _ when this == Scheduled => onScheduled(),
            _ when this == Canceled => onCanceled(),
            _ when this == Escheated => onEscheated(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaid,
        Action onVoid,
        Action onScheduled,
        Action onCanceled,
        Action onEscheated,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Paid) onPaid();
        else if (this == Void) onVoid();
        else if (this == Scheduled) onScheduled();
        else if (this == Canceled) onCanceled();
        else if (this == Escheated) onEscheated();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
