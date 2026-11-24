namespace Fellow.Requests.Notes;

/// <summary>
/// The inputs of the AppsDeveloperApiApiDeleteNote operation.
/// </summary>
public sealed record AppsDeveloperApiApiDeleteNoteRequest
{
    public required string NoteId { get; init; }
}
