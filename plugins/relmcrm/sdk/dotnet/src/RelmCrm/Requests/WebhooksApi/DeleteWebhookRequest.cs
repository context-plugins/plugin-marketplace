namespace RelmCrm.Requests.WebhooksApi;

/// <summary>
/// The inputs of the DeleteWebhook operation.
/// </summary>
public sealed record DeleteWebhookRequest
{
    public required string Id { get; init; }
}
