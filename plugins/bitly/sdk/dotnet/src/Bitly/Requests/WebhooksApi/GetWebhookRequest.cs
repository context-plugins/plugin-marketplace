namespace Bitly.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhook operation.
/// </summary>
public sealed record GetWebhookRequest
{
    /// <summary>
    /// A GUID for a Bitly webhook
    /// </summary>
    public required string WebhookGuid { get; init; }
}
