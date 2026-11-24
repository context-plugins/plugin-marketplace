using Lili.Models;

namespace Lili.Requests;

/// <summary>
/// The inputs of the UpdateWebhook operation.
/// </summary>
public sealed record UpdateWebhookRequest
{
    /// <summary>
    /// The webhook ID
    /// </summary>
    public required string WebhookId { get; init; }

    public required WebhookRequestModel Body { get; init; }
}
