using CircleCi.Models;

namespace CircleCi.Requests.Webhook;

/// <summary>
/// The inputs of the CreateWebhook operation.
/// </summary>
public sealed record CreateWebhookOperationRequest
{
    public required CreateWebhookRequest Body { get; init; }
}
