namespace Curlec.Requests.PartnerDocuments;

/// <summary>
/// The inputs of the FetchStakeholderDocuments operation.
/// </summary>
public sealed record FetchStakeholderDocumentsRequest
{
    /// <summary>
    /// Unique identifier of the linked merchant account (e.g. <c>acc_00000000000001</c>).
    /// </summary>
    public required string AccountId { get; init; }

    /// <summary>
    /// Unique identifier of the stakeholder (e.g. <c>sth_00000000000001</c>).
    /// </summary>
    public required string StakeholderId { get; init; }
}
