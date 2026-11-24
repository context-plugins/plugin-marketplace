namespace FlowAccount.Requests.DebitNote;

/// <summary>
/// The inputs of the DebitNoteDelete operation.
/// </summary>
public sealed record DebitNoteDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
