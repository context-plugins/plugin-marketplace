using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Reserved Instance state, tracking the AWS EC2 Reserved Instance API verbatim in external snake_case form. Differs from Savings Plan states by design. For example, the terminal state is <c>retired</c> here vs <c>expired</c> on Savings Plans.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 Active = new("active");

    public static readonly State1 Retired = new("retired");

    public static readonly State1 PaymentPending = new("payment_pending");

    public static readonly State1 PaymentFailed = new("payment_failed");

    public static readonly State1 Queued = new("queued");

    public static readonly State1 QueuedDeleted = new("queued_deleted");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onRetired,
        Func<TResult> onPaymentPending,
        Func<TResult> onPaymentFailed,
        Func<TResult> onQueued,
        Func<TResult> onQueuedDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Retired => onRetired(),
            _ when this == PaymentPending => onPaymentPending(),
            _ when this == PaymentFailed => onPaymentFailed(),
            _ when this == Queued => onQueued(),
            _ when this == QueuedDeleted => onQueuedDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive,
        Action onRetired,
        Action onPaymentPending,
        Action onPaymentFailed,
        Action onQueued,
        Action onQueuedDeleted,
        Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Retired) onRetired();
        else if (this == PaymentPending) onPaymentPending();
        else if (this == PaymentFailed) onPaymentFailed();
        else if (this == Queued) onQueued();
        else if (this == QueuedDeleted) onQueuedDeleted();
        else otherwise(Value);
    }
}
