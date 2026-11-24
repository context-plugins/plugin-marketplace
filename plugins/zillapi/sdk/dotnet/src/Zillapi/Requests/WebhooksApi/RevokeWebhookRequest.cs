using System;

namespace Zillapi.Requests.WebhooksApi;

/// <summary>
/// The inputs of the RevokeWebhook operation.
/// </summary>
public sealed record RevokeWebhookRequest
{
    /// <summary>
    /// Webhook UUID.
    /// </summary>
    public required Guid Id { get; init; }
}
