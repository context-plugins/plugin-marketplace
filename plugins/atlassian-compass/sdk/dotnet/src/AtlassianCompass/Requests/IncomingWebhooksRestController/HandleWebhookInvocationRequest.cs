namespace AtlassianCompass.Requests.IncomingWebhooksRestController;

/// <summary>
/// The inputs of the HandleWebhookInvocation operation.
/// </summary>
public sealed record HandleWebhookInvocationRequest
{
    public required string WebhookId { get; init; }

    public required string Body { get; init; }
}
