using PrismaReviews.Core.Webhooks;

namespace PrismaReviews.Webhooks;

public record PrismaReviewsWebhookEvent : WebhookEvent<PrismaReviewsEventPayload>
{
    internal PrismaReviewsWebhookEvent(PrismaReviewsEventPayload payload) : base(payload)
    {
    }
}
