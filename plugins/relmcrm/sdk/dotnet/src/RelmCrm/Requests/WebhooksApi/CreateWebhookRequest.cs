using RelmCrm.Models;

namespace RelmCrm.Requests.WebhooksApi;

/// <summary>
/// The inputs of the CreateWebhook operation.
/// </summary>
public sealed record CreateWebhookRequest
{
    public required WebhookInput Body { get; init; }
}
