namespace Bitly.Requests.WebhooksApi;

/// <summary>
/// The inputs of the DeleteWebhook operation.
/// </summary>
public sealed record DeleteWebhookRequest
{
    /// <summary>
    /// A GUID for a Bitly webhook
    /// </summary>
    public required string WebhookGuid { get; init; }
}
