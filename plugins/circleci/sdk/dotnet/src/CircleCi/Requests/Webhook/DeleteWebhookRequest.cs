using System;

namespace CircleCi.Requests.Webhook;

/// <summary>
/// The inputs of the DeleteWebhook operation.
/// </summary>
public sealed record DeleteWebhookRequest
{
    /// <summary>
    /// The unique identifier of the webhook
    /// </summary>
    public required Guid WebhookId { get; init; }
}
