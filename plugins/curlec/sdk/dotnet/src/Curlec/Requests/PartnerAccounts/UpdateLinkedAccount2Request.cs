using Curlec.Models;

namespace Curlec.Requests.PartnerAccounts;

/// <summary>
/// The inputs of the UpdateLinkedAccount2 operation.
/// </summary>
public sealed record UpdateLinkedAccount2Request
{
    /// <summary>
    /// Linked Account ID (acc_*).
    /// </summary>
    public required string AccountId { get; init; }

    public required V2AccountsRequestRazorpayPartnerAccountsApi Body { get; init; }
}
