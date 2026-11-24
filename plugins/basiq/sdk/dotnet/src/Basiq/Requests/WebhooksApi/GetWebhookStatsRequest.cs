namespace Basiq.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhookStats operation.
/// </summary>
public sealed record GetWebhookStatsRequest
{
    /// <summary>
    /// webhook Id
    /// </summary>
    public required string WebhookId { get; init; }
}
