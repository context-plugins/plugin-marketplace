using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// Delivery status of a send. <c>not_found</c> means no send with this id exists on
/// the campaign, including a send that has not been processed yet.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SendStatus>))]
public sealed record SendStatus : OpenStringEnum<SendStatus>
{
    private SendStatus(string value) : base(value)
    {
    }

    public static readonly SendStatus Sent = new("sent");

    public static readonly SendStatus Delivered = new("delivered");

    public static readonly SendStatus Bounced = new("bounced");

    public static readonly SendStatus Failed = new("failed");

    public static readonly SendStatus Dropped = new("dropped");

    public static readonly SendStatus NotFound = new("not_found");

    public TResult Match<TResult>(Func<TResult> onSent,
        Func<TResult> onDelivered,
        Func<TResult> onBounced,
        Func<TResult> onFailed,
        Func<TResult> onDropped,
        Func<TResult> onNotFound,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sent => onSent(),
            _ when this == Delivered => onDelivered(),
            _ when this == Bounced => onBounced(),
            _ when this == Failed => onFailed(),
            _ when this == Dropped => onDropped(),
            _ when this == NotFound => onNotFound(),
            _ => otherwise(Value)
        };

    public void Match(Action onSent,
        Action onDelivered,
        Action onBounced,
        Action onFailed,
        Action onDropped,
        Action onNotFound,
        Action<string> otherwise)
    {
        if (this == Sent) onSent();
        else if (this == Delivered) onDelivered();
        else if (this == Bounced) onBounced();
        else if (this == Failed) onFailed();
        else if (this == Dropped) onDropped();
        else if (this == NotFound) onNotFound();
        else otherwise(Value);
    }
}
