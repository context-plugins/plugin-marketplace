namespace FlowAccount.Requests.CreditNote;

/// <summary>
/// The inputs of the CreditNoteDelete operation.
/// </summary>
public sealed record CreditNoteDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
