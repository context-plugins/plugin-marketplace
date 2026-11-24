namespace Basiq.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhookMessage operation.
/// </summary>
public sealed record GetWebhookMessageRequest
{
    /// <summary>
    /// webhook Id
    /// </summary>
    public required string WebhookId { get; init; }

    /// <summary>
    /// message Id
    /// </summary>
    public required string MessageId { get; init; }
}
