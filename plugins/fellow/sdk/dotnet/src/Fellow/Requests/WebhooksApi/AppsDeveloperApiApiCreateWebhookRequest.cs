using Fellow.Models;

namespace Fellow.Requests.WebhooksApi;

/// <summary>
/// The inputs of the AppsDeveloperApiApiCreateWebhook operation.
/// </summary>
public sealed record AppsDeveloperApiApiCreateWebhookRequest
{
    public required CreateWebhookRequest Body { get; init; }
}
