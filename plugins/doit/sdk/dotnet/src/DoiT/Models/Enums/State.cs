using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Savings Plan lifecycle state. Values match the AWS Savings Plans API in snake_case.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State PendingReturn = new("pending_return");

    public static readonly State Returning = new("returning");

    public static readonly State Active = new("active");

    public static readonly State Expired = new("expired");

    public static readonly State Queued = new("queued");

    public static readonly State QueuedReturning = new("queued_returning");

    public static readonly State PaymentFailed = new("payment_failed");

    public static readonly State PaymentPending = new("payment_pending");

    public TResult Match<TResult>(Func<TResult> onPendingReturn,
        Func<TResult> onReturning,
        Func<TResult> onActive,
        Func<TResult> onExpired,
        Func<TResult> onQueued,
        Func<TResult> onQueuedReturning,
        Func<TResult> onPaymentFailed,
        Func<TResult> onPaymentPending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PendingReturn => onPendingReturn(),
            _ when this == Returning => onReturning(),
            _ when this == Active => onActive(),
            _ when this == Expired => onExpired(),
            _ when this == Queued => onQueued(),
            _ when this == QueuedReturning => onQueuedReturning(),
            _ when this == PaymentFailed => onPaymentFailed(),
            _ when this == PaymentPending => onPaymentPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onPendingReturn,
        Action onReturning,
        Action onActive,
        Action onExpired,
        Action onQueued,
        Action onQueuedReturning,
        Action onPaymentFailed,
        Action onPaymentPending,
        Action<string> otherwise)
    {
        if (this == PendingReturn) onPendingReturn();
        else if (this == Returning) onReturning();
        else if (this == Active) onActive();
        else if (this == Expired) onExpired();
        else if (this == Queued) onQueued();
        else if (this == QueuedReturning) onQueuedReturning();
        else if (this == PaymentFailed) onPaymentFailed();
        else if (this == PaymentPending) onPaymentPending();
        else otherwise(Value);
    }
}
