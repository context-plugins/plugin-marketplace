using Basiq.Models;

namespace Basiq.Requests.WebhooksApi;

/// <summary>
/// The inputs of the UpdateWebhook operation.
/// </summary>
public sealed record UpdateWebhookRequest
{
    public required string WebhookId { get; init; }

    /// <summary>
    /// Webhook request object.
    /// </summary>
    public NotificationsWebhooksRequest? Body { get; init; }
}
