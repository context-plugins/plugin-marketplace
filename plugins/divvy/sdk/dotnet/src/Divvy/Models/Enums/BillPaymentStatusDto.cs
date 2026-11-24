using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Payment Status of a bill.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillPaymentStatusDto>))]
public sealed record BillPaymentStatusDto : OpenStringEnum<BillPaymentStatusDto>
{
    private BillPaymentStatusDto(string value) : base(value)
    {
    }

    public static readonly BillPaymentStatusDto Paid = new("PAID");

    public static readonly BillPaymentStatusDto Unpaid = new("UNPAID");

    public static readonly BillPaymentStatusDto PartiallyPaid = new("PARTIALLY_PAID");

    public static readonly BillPaymentStatusDto Scheduled = new("SCHEDULED");

    public static readonly BillPaymentStatusDto InProcess = new("IN_PROCESS");

    public static readonly BillPaymentStatusDto Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onPaid,
        Func<TResult> onUnpaid,
        Func<TResult> onPartiallyPaid,
        Func<TResult> onScheduled,
        Func<TResult> onInProcess,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Paid => onPaid(),
            _ when this == Unpaid => onUnpaid(),
            _ when this == PartiallyPaid => onPartiallyPaid(),
            _ when this == Scheduled => onScheduled(),
            _ when this == InProcess => onInProcess(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaid,
        Action onUnpaid,
        Action onPartiallyPaid,
        Action onScheduled,
        Action onInProcess,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Paid) onPaid();
        else if (this == Unpaid) onUnpaid();
        else if (this == PartiallyPaid) onPartiallyPaid();
        else if (this == Scheduled) onScheduled();
        else if (this == InProcess) onInProcess();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
