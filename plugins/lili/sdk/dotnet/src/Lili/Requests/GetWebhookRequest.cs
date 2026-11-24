namespace Lili.Requests;

/// <summary>
/// The inputs of the GetWebhook operation.
/// </summary>
public sealed record GetWebhookRequest
{
    /// <summary>
    /// The webhook ID
    /// </summary>
    public required string WebhookId { get; init; }
}
