using PrismaReviews.Models;

namespace PrismaReviews.Requests.WebhooksApi;

/// <summary>
/// The inputs of the CreateWebhook operation.
/// </summary>
public sealed record CreateWebhookRequest
{
    public required V1WebhooksRequest Body { get; init; }
}
