using Curlec.Models;

namespace Curlec.Requests.LinkedAccounts;

/// <summary>
/// The inputs of the CreateStakeholder operation.
/// </summary>
public sealed record CreateStakeholderRequest
{
    /// <summary>
    /// Unique identifier of the linked merchant account (e.g. <c>acc_00000000000001</c>).
    /// </summary>
    public required string AccountId { get; init; }

    public required V2AccountsStakeholdersRequest Body { get; init; }
}
