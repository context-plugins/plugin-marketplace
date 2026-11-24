using JuriSign.Models;

namespace JuriSign.Requests.WebhooksApi;

/// <summary>
/// The inputs of the CreateWebhook operation.
/// </summary>
public sealed record CreateWebhookRequest
{
    public required WebhooksRequest Body { get; init; }
}
