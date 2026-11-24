using Curlec.Models;

namespace Curlec.Requests.PartnerStakeholders;

/// <summary>
/// The inputs of the CreateStakeholder2 operation.
/// </summary>
public sealed record CreateStakeholder2Request
{
    /// <summary>
    /// Unique identifier of the linked merchant account (e.g. <c>acc_00000000000001</c>).
    /// </summary>
    public required string AccountId { get; init; }

    public required V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi Body { get; init; }
}
