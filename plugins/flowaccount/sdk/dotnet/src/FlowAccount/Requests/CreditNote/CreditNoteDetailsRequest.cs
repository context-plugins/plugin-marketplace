namespace FlowAccount.Requests.CreditNote;

/// <summary>
/// The inputs of the CreditNoteDetails operation.
/// </summary>
public sealed record CreditNoteDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
