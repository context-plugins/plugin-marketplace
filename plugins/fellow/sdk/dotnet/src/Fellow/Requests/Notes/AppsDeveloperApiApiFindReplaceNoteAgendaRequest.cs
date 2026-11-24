using Fellow.Models;

namespace Fellow.Requests.Notes;

/// <summary>
/// The inputs of the AppsDeveloperApiApiFindReplaceNoteAgenda operation.
/// </summary>
public sealed record AppsDeveloperApiApiFindReplaceNoteAgendaRequest
{
    public required string NoteId { get; init; }

    public required FindReplaceNoteAgendaRequest Body { get; init; }
}
