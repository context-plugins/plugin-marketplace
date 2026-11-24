namespace JuriSign.Requests.WebhooksApi;

/// <summary>
/// The inputs of the DeleteWebhook operation.
/// </summary>
public sealed record DeleteWebhookRequest
{
    public required int Id { get; init; }
}
