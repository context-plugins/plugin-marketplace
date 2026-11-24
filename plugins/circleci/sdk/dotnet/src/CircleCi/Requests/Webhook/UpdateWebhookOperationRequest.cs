using System;
using CircleCi.Models;

namespace CircleCi.Requests.Webhook;

/// <summary>
/// The inputs of the UpdateWebhook operation.
/// </summary>
public sealed record UpdateWebhookOperationRequest
{
    /// <summary>
    /// The unique identifier of the webhook
    /// </summary>
    public required Guid WebhookId { get; init; }

    public required UpdateWebhookRequest Body { get; init; }
}
