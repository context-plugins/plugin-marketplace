using System;

namespace CircleCi.Requests.Webhook;

/// <summary>
/// The inputs of the GetWebhook operation.
/// </summary>
public sealed record GetWebhookRequest
{
    /// <summary>
    /// The unique identifier of the webhook
    /// </summary>
    public required Guid WebhookId { get; init; }
}
