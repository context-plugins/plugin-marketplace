using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status40>))]
public sealed record Status40 : OpenStringEnum<Status40>
{
    private Status40(string value) : base(value)
    {
    }

    public static readonly Status40 Pending = new("PENDING");

    public static readonly Status40 Sent = new("SENT");

    public static readonly Status40 Delivered = new("DELIVERED");

    public static readonly Status40 Seen = new("SEEN");

    public static readonly Status40 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onSent,
        Func<TResult> onDelivered,
        Func<TResult> onSeen,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Sent => onSent(),
            _ when this == Delivered => onDelivered(),
            _ when this == Seen => onSeen(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onSent,
        Action onDelivered,
        Action onSeen,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Sent) onSent();
        else if (this == Delivered) onDelivered();
        else if (this == Seen) onSeen();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
