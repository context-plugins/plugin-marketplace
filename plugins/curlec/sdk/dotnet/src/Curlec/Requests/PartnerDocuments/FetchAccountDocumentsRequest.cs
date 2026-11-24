namespace Curlec.Requests.PartnerDocuments;

/// <summary>
/// The inputs of the FetchAccountDocuments operation.
/// </summary>
public sealed record FetchAccountDocumentsRequest
{
    /// <summary>
    /// Unique identifier of the linked merchant account (e.g. <c>acc_00000000000001</c>).
    /// </summary>
    public required string AccountId { get; init; }
}
