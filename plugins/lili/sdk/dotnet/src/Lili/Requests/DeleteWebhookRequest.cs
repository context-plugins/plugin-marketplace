namespace Lili.Requests;

/// <summary>
/// The inputs of the DeleteWebhook operation.
/// </summary>
public sealed record DeleteWebhookRequest
{
    /// <summary>
    /// The webhook ID
    /// </summary>
    public required string WebhookId { get; init; }
}
