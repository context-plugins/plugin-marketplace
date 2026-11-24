using Curlec.Models;

namespace Curlec.Requests.LinkedAccounts;

/// <summary>
/// The inputs of the UpdateStakeholder operation.
/// </summary>
public sealed record UpdateStakeholderRequest
{
    /// <summary>
    /// Linked Account ID (acc_*).
    /// </summary>
    public required string AccountId { get; init; }

    /// <summary>
    /// Stakeholder ID (sth_*).
    /// </summary>
    public required string StakeholderId { get; init; }

    public required V2AccountsStakeholdersRequest1 Body { get; init; }
}
