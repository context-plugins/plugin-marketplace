namespace FlowAccount.Requests.DebitNote;

/// <summary>
/// The inputs of the DebitNoteDetails operation.
/// </summary>
public sealed record DebitNoteDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
