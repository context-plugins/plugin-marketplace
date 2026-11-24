using Bitly.Models;

namespace Bitly.Requests.WebhooksApi;

/// <summary>
/// The inputs of the UpdateWebhook operation.
/// </summary>
public sealed record UpdateWebhookRequest
{
    /// <summary>
    /// A GUID for a Bitly webhook
    /// </summary>
    public required string WebhookGuid { get; init; }

    public required WebhookUpdate Body { get; init; }
}
