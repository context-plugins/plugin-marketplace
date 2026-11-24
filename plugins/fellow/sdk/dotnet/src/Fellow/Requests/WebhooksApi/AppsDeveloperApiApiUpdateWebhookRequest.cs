using Fellow.Models;

namespace Fellow.Requests.WebhooksApi;

/// <summary>
/// The inputs of the AppsDeveloperApiApiUpdateWebhook operation.
/// </summary>
public sealed record AppsDeveloperApiApiUpdateWebhookRequest
{
    public required string WebhookId { get; init; }

    public required UpdateWebhookRequest Body { get; init; }
}
