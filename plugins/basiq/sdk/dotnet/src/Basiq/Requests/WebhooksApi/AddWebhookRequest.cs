using Basiq.Models;

namespace Basiq.Requests.WebhooksApi;

/// <summary>
/// The inputs of the AddWebhook operation.
/// </summary>
public sealed record AddWebhookRequest
{
    /// <summary>
    /// Webhook request object.
    /// </summary>
    public NotificationsWebhooksRequest? Body { get; init; }
}
