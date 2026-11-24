using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum representing the payment status of a billing statement.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillingStatementPaymentStatus>))]
public sealed record BillingStatementPaymentStatus : OpenStringEnum<BillingStatementPaymentStatus>
{
    private BillingStatementPaymentStatus(string value) : base(value)
    {
    }

    public static readonly BillingStatementPaymentStatus Unpaid = new("UNPAID");

    public static readonly BillingStatementPaymentStatus Paid = new("PAID");

    public static readonly BillingStatementPaymentStatus Pending = new("PENDING");

    public static readonly BillingStatementPaymentStatus Failed = new("FAILED");

    public static readonly BillingStatementPaymentStatus Voided = new("VOIDED");

    public static readonly BillingStatementPaymentStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onUnpaid,
        Func<TResult> onPaid,
        Func<TResult> onPending,
        Func<TResult> onFailed,
        Func<TResult> onVoided,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unpaid => onUnpaid(),
            _ when this == Paid => onPaid(),
            _ when this == Pending => onPending(),
            _ when this == Failed => onFailed(),
            _ when this == Voided => onVoided(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnpaid,
        Action onPaid,
        Action onPending,
        Action onFailed,
        Action onVoided,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Unpaid) onUnpaid();
        else if (this == Paid) onPaid();
        else if (this == Pending) onPending();
        else if (this == Failed) onFailed();
        else if (this == Voided) onVoided();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
