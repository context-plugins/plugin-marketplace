using Curlec.Models;

namespace Curlec.Requests.PartnerWebhooks;

/// <summary>
/// The inputs of the UpdatePartnerWebhook operation.
/// </summary>
public sealed record UpdatePartnerWebhookRequest
{
    /// <summary>
    /// Unique identifier of the linked merchant account (e.g. <c>acc_00000000000001</c>).
    /// </summary>
    public required string AccountId { get; init; }

    /// <summary>
    /// Unique identifier of the webhook (e.g. <c>we_00000000000001</c>).
    /// </summary>
    public required string WebhookId { get; init; }

    public required PartnerWebhook Body { get; init; }
}
