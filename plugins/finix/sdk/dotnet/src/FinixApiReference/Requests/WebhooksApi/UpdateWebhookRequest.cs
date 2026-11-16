using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.WebhooksApi;

/// <summary>
/// The inputs of the UpdateWebhook operation.
/// </summary>
public sealed record UpdateWebhookRequest
{
    /// <summary>
    /// The ID of <c>Webhook</c> object.
    /// </summary>
    public required string WebhookId { get; init; }

    public required WebhooksRequest1 Body { get; init; }
}
