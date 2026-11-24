namespace PrismaReviews.Requests.WebhooksApi;

/// <summary>
/// The inputs of the DeleteWebhook operation.
/// </summary>
public sealed record DeleteWebhookRequest
{
    /// <summary>
    /// Webhook endpoint ID (<c>we_…</c>).
    /// </summary>
    public required string Id { get; init; }
}
