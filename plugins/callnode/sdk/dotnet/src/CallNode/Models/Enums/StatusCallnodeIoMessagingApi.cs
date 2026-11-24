using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusCallnodeIoMessagingApi>))]
public sealed record StatusCallnodeIoMessagingApi : OpenStringEnum<StatusCallnodeIoMessagingApi>
{
    private StatusCallnodeIoMessagingApi(string value) : base(value)
    {
    }

    public static readonly StatusCallnodeIoMessagingApi Queued = new("queued");

    public static readonly StatusCallnodeIoMessagingApi Sent = new("sent");

    public static readonly StatusCallnodeIoMessagingApi Delivered = new("delivered");

    public static readonly StatusCallnodeIoMessagingApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onSent,
        Func<TResult> onDelivered,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Sent => onSent(),
            _ when this == Delivered => onDelivered(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued, Action onSent, Action onDelivered, Action onFailed, Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Sent) onSent();
        else if (this == Delivered) onDelivered();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
