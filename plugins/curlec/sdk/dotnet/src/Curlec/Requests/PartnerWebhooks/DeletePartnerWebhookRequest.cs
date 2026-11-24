namespace Curlec.Requests.PartnerWebhooks;

/// <summary>
/// The inputs of the DeletePartnerWebhook operation.
/// </summary>
public sealed record DeletePartnerWebhookRequest
{
    /// <summary>
    /// Unique identifier of the linked merchant account (e.g. <c>acc_00000000000001</c>).
    /// </summary>
    public required string AccountId { get; init; }

    /// <summary>
    /// Unique identifier of the webhook (e.g. <c>we_00000000000001</c>).
    /// </summary>
    public required string WebhookId { get; init; }
}
