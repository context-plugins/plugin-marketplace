namespace Curlec.Requests.PartnerStakeholders;

/// <summary>
/// The inputs of the FetchAllStakeholders operation.
/// </summary>
public sealed record FetchAllStakeholdersRequest
{
    /// <summary>
    /// Unique identifier of the linked merchant account (e.g. <c>acc_00000000000001</c>).
    /// </summary>
    public required string AccountId { get; init; }
}
