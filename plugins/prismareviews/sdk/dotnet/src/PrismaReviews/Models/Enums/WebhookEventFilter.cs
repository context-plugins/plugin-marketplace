using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

/// <summary>
/// An event type, or <c>*</c> for all.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<WebhookEventFilter>))]
public sealed record WebhookEventFilter : OpenStringEnum<WebhookEventFilter>
{
    private WebhookEventFilter(string value) : base(value)
    {
    }

    public static readonly WebhookEventFilter ReviewCreated = new("review.created");

    public static readonly WebhookEventFilter ReviewUpdated = new("review.updated");

    public static readonly WebhookEventFilter ReplyPublished = new("reply.published");

    public static readonly WebhookEventFilter ReplyFailed = new("reply.failed");

    public static readonly WebhookEventFilter ReplyUnknown = new("reply.unknown");

    public static readonly WebhookEventFilter ConnectionUpdated = new("connection.updated");

    public static readonly WebhookEventFilter U002A = new("*");

    public TResult Match<TResult>(Func<TResult> onReviewCreated,
        Func<TResult> onReviewUpdated,
        Func<TResult> onReplyPublished,
        Func<TResult> onReplyFailed,
        Func<TResult> onReplyUnknown,
        Func<TResult> onConnectionUpdated,
        Func<TResult> onU002A,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ReviewCreated => onReviewCreated(),
            _ when this == ReviewUpdated => onReviewUpdated(),
            _ when this == ReplyPublished => onReplyPublished(),
            _ when this == ReplyFailed => onReplyFailed(),
            _ when this == ReplyUnknown => onReplyUnknown(),
            _ when this == ConnectionUpdated => onConnectionUpdated(),
            _ when this == U002A => onU002A(),
            _ => otherwise(Value)
        };

    public void Match(Action onReviewCreated,
        Action onReviewUpdated,
        Action onReplyPublished,
        Action onReplyFailed,
        Action onReplyUnknown,
        Action onConnectionUpdated,
        Action onU002A,
        Action<string> otherwise)
    {
        if (this == ReviewCreated) onReviewCreated();
        else if (this == ReviewUpdated) onReviewUpdated();
        else if (this == ReplyPublished) onReplyPublished();
        else if (this == ReplyFailed) onReplyFailed();
        else if (this == ReplyUnknown) onReplyUnknown();
        else if (this == ConnectionUpdated) onConnectionUpdated();
        else if (this == U002A) onU002A();
        else otherwise(Value);
    }
}
