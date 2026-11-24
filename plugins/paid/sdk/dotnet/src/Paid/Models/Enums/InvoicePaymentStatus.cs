using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InvoicePaymentStatus>))]
public sealed record InvoicePaymentStatus : OpenStringEnum<InvoicePaymentStatus>
{
    private InvoicePaymentStatus(string value) : base(value)
    {
    }

    public static readonly InvoicePaymentStatus Pending = new("pending");

    public static readonly InvoicePaymentStatus Paid = new("paid");

    public static readonly InvoicePaymentStatus PartiallyPaid = new("partiallyPaid");

    public static readonly InvoicePaymentStatus Overdue = new("overdue");

    public static readonly InvoicePaymentStatus Error = new("error");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onPaid,
        Func<TResult> onPartiallyPaid,
        Func<TResult> onOverdue,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Paid => onPaid(),
            _ when this == PartiallyPaid => onPartiallyPaid(),
            _ when this == Overdue => onOverdue(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onPaid,
        Action onPartiallyPaid,
        Action onOverdue,
        Action onError,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Paid) onPaid();
        else if (this == PartiallyPaid) onPartiallyPaid();
        else if (this == Overdue) onOverdue();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
