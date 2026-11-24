using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InvoicesGetParametersPaymentStatus>))]
public sealed record InvoicesGetParametersPaymentStatus : OpenStringEnum<InvoicesGetParametersPaymentStatus>
{
    private InvoicesGetParametersPaymentStatus(string value) : base(value)
    {
    }

    public static readonly InvoicesGetParametersPaymentStatus Pending = new("pending");

    public static readonly InvoicesGetParametersPaymentStatus Paid = new("paid");

    public static readonly InvoicesGetParametersPaymentStatus PartiallyPaid = new("partiallyPaid");

    public static readonly InvoicesGetParametersPaymentStatus Overdue = new("overdue");

    public static readonly InvoicesGetParametersPaymentStatus Error = new("error");

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
