using Bitly.Models;

namespace Bitly.Requests.WebhooksApi;

/// <summary>
/// The inputs of the CreateWebhook operation.
/// </summary>
public sealed record CreateWebhookRequest
{
    public required WebhookCreate Body { get; init; }
}
