using System.Text.Json;
using PrismaReviews.Core.Webhooks;

namespace PrismaReviews.Webhooks;

public sealed class PrismaReviewsWebhookParser : WebhookEventParser<PrismaReviewsWebhookEvent>
{
    private readonly JsonSerializerOptions _serializerOptions = new();

    protected override PrismaReviewsWebhookEvent CreateEvent(JsonElement root, WebhookRequest request) =>
        new(ReadPayload<PrismaReviewsEventPayload>(root, _serializerOptions));
}
