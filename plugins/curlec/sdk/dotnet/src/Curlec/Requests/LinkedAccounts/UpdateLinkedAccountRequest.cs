using Curlec.Models;

namespace Curlec.Requests.LinkedAccounts;

/// <summary>
/// The inputs of the UpdateLinkedAccount operation.
/// </summary>
public sealed record UpdateLinkedAccountRequest
{
    /// <summary>
    /// Linked Account ID (acc_*).
    /// </summary>
    public required string AccountId { get; init; }

    public required V2AccountsRequest1 Body { get; init; }
}
