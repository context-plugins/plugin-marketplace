using Curlec.Models;

namespace Curlec.Requests.PartnerStakeholders;

/// <summary>
/// The inputs of the UpdateStakeholder2 operation.
/// </summary>
public sealed record UpdateStakeholder2Request
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
