namespace Bitly.Requests.WebhooksApi;

/// <summary>
/// The inputs of the VerifyWebhook operation.
/// </summary>
public sealed record VerifyWebhookRequest
{
    /// <summary>
    /// A GUID for a Bitly webhook
    /// </summary>
    public required string WebhookGuid { get; init; }
}
