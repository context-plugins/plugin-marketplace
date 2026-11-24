namespace FlowAccount.Requests.DebitNote;

/// <summary>
/// The inputs of the DebitNoteGetCumulativeDocumentReferenceList operation.
/// </summary>
public sealed record DebitNoteGetCumulativeDocumentReferenceListRequest
{
    public required string Culture { get; init; }

    public string? Ids { get; init; }
}
