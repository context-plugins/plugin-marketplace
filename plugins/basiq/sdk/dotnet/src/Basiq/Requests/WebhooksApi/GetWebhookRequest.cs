namespace Basiq.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhook operation.
/// </summary>
public sealed record GetWebhookRequest
{
    public required string WebhookId { get; init; }
}
