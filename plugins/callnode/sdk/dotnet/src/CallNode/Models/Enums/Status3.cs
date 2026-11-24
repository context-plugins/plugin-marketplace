using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Queued = new("queued");

    public static readonly Status3 Sent = new("sent");

    public static readonly Status3 Delivered = new("delivered");

    public static readonly Status3 Delayed = new("delayed");

    public static readonly Status3 Bounced = new("bounced");

    public static readonly Status3 Complained = new("complained");

    public static readonly Status3 Failed = new("failed");

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
