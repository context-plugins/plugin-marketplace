using Ortto.Models;

namespace Ortto.Requests.Accounts;

/// <summary>
/// The inputs of the MergeAccounts operation.
/// </summary>
public sealed record MergeAccountsRequest
{
    public required AccountsMergeRequest Body { get; init; }
}
