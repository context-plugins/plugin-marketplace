using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<WebhookEventType>))]
public sealed record WebhookEventType : OpenStringEnum<WebhookEventType>
{
    private WebhookEventType(string value) : base(value)
    {
    }

    public static readonly WebhookEventType ReviewCreated = new("review.created");

    public static readonly WebhookEventType ReviewUpdated = new("review.updated");

    public static readonly WebhookEventType ReplyPublished = new("reply.published");

    public static readonly WebhookEventType ReplyFailed = new("reply.failed");

    public static readonly WebhookEventType ReplyUnknown = new("reply.unknown");

    public static readonly WebhookEventType ConnectionUpdated = new("connection.updated");

    public static readonly WebhookEventType LocationSyncFailed = new("location.sync_failed");

    public static readonly WebhookEventType LocationSyncRecovered = new("location.sync_recovered");

    public TResult Match<TResult>(Func<TResult> onReviewCreated,
        Func<TResult> onReviewUpdated,
        Func<TResult> onReplyPublished,
        Func<TResult> onReplyFailed,
        Func<TResult> onReplyUnknown,
        Func<TResult> onConnectionUpdated,
        Func<TResult> onLocationSyncFailed,
        Func<TResult> onLocationSyncRecovered,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ReviewCreated => onReviewCreated(),
            _ when this == ReviewUpdated => onReviewUpdated(),
            _ when this == ReplyPublished => onReplyPublished(),
            _ when this == ReplyFailed => onReplyFailed(),
            _ when this == ReplyUnknown => onReplyUnknown(),
            _ when this == ConnectionUpdated => onConnectionUpdated(),
            _ when this == LocationSyncFailed => onLocationSyncFailed(),
            _ when this == LocationSyncRecovered => onLocationSyncRecovered(),
            _ => otherwise(Value)
        };

    public void Match(Action onReviewCreated,
        Action onReviewUpdated,
        Action onReplyPublished,
        Action onReplyFailed,
        Action onReplyUnknown,
        Action onConnectionUpdated,
        Action onLocationSyncFailed,
        Action onLocationSyncRecovered,
        Action<string> otherwise)
    {
        if (this == ReviewCreated) onReviewCreated();
        else if (this == ReviewUpdated) onReviewUpdated();
        else if (this == ReplyPublished) onReplyPublished();
        else if (this == ReplyFailed) onReplyFailed();
        else if (this == ReplyUnknown) onReplyUnknown();
        else if (this == ConnectionUpdated) onConnectionUpdated();
        else if (this == LocationSyncFailed) onLocationSyncFailed();
        else if (this == LocationSyncRecovered) onLocationSyncRecovered();
        else otherwise(Value);
    }
}
