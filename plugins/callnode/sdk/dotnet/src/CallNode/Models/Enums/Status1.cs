using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

/// <summary>
/// <c>queued</c> only for the moment the message is being handed over (a list can catch it); the send answers <c>sent</c> or <c>failed</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Queued = new("queued");

    public static readonly Status1 Sent = new("sent");

    public static readonly Status1 Delivered = new("delivered");

    public static readonly Status1 Delayed = new("delayed");

    public static readonly Status1 Bounced = new("bounced");

    public static readonly Status1 Complained = new("complained");

    public static readonly Status1 Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onSent,
        Func<TResult> onDelivered,
        Func<TResult> onDelayed,
        Func<TResult> onBounced,
        Func<TResult> onComplained,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Sent => onSent(),
            _ when this == Delivered => onDelivered(),
            _ when this == Delayed => onDelayed(),
            _ when this == Bounced => onBounced(),
            _ when this == Complained => onComplained(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onSent,
        Action onDelivered,
        Action onDelayed,
        Action onBounced,
        Action onComplained,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Sent) onSent();
        else if (this == Delivered) onDelivered();
        else if (this == Delayed) onDelayed();
        else if (this == Bounced) onBounced();
        else if (this == Complained) onComplained();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
