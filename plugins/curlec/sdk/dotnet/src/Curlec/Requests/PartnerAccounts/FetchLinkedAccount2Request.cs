namespace Curlec.Requests.PartnerAccounts;

/// <summary>
/// The inputs of the FetchLinkedAccount2 operation.
/// </summary>
public sealed record FetchLinkedAccount2Request
{
    /// <summary>
    /// Linked Account ID (acc_*).
    /// </summary>
    public required string AccountId { get; init; }
}
