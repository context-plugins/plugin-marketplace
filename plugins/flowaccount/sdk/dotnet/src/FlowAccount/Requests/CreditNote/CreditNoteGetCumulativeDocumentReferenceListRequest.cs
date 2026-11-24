namespace FlowAccount.Requests.CreditNote;

/// <summary>
/// The inputs of the CreditNoteGetCumulativeDocumentReferenceList operation.
/// </summary>
public sealed record CreditNoteGetCumulativeDocumentReferenceListRequest
{
    public required string Culture { get; init; }

    public string? Ids { get; init; }
}
