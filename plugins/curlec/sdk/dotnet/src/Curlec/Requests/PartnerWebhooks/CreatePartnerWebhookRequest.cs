using Curlec.Models;

namespace Curlec.Requests.PartnerWebhooks;

/// <summary>
/// The inputs of the CreatePartnerWebhook operation.
/// </summary>
public sealed record CreatePartnerWebhookRequest
{
    /// <summary>
    /// Unique identifier of the linked merchant account (e.g. <c>acc_00000000000001</c>).
    /// </summary>
    public required string AccountId { get; init; }

    public required V2AccountsWebhooksRequest Body { get; init; }
}
