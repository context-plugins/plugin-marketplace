using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Invoice payment status enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InvoicePaymentStatus>))]
public sealed record InvoicePaymentStatus : OpenStringEnum<InvoicePaymentStatus>
{
    private InvoicePaymentStatus(string value) : base(value)
    {
    }

    public static readonly InvoicePaymentStatus Paid = new("PAID");

    public static readonly InvoicePaymentStatus Void = new("VOID");

    public static readonly InvoicePaymentStatus Scheduled = new("SCHEDULED");

    public static readonly InvoicePaymentStatus Canceled = new("CANCELED");

    public static readonly InvoicePaymentStatus Initiated = new("INITIATED");

    public static readonly InvoicePaymentStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onPaid,
        Func<TResult> onVoid,
        Func<TResult> onScheduled,
        Func<TResult> onCanceled,
        Func<TResult> onInitiated,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Paid => onPaid(),
            _ when this == Void => onVoid(),
            _ when this == Scheduled => onScheduled(),
            _ when this == Canceled => onCanceled(),
            _ when this == Initiated => onInitiated(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaid,
        Action onVoid,
        Action onScheduled,
        Action onCanceled,
        Action onInitiated,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Paid) onPaid();
        else if (this == Void) onVoid();
        else if (this == Scheduled) onScheduled();
        else if (this == Canceled) onCanceled();
        else if (this == Initiated) onInitiated();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
