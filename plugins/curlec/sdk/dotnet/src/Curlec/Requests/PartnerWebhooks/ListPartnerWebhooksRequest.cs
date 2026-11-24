namespace Curlec.Requests.PartnerWebhooks;

/// <summary>
/// The inputs of the ListPartnerWebhooks operation.
/// </summary>
public sealed record ListPartnerWebhooksRequest
{
    /// <summary>
    /// Unique identifier of the linked merchant account (e.g. <c>acc_00000000000001</c>).
    /// </summary>
    public required string AccountId { get; init; }
}
