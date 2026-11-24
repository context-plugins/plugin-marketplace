namespace Fellow.Requests.Notes;

/// <summary>
/// The inputs of the AppsDeveloperApiApiGetNoteById operation.
/// </summary>
public sealed record AppsDeveloperApiApiGetNoteByIdRequest
{
    public required string NoteId { get; init; }
}
