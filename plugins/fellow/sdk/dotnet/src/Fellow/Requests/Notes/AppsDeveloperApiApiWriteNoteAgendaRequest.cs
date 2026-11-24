using Fellow.Models;

namespace Fellow.Requests.Notes;

/// <summary>
/// The inputs of the AppsDeveloperApiApiWriteNoteAgenda operation.
/// </summary>
public sealed record AppsDeveloperApiApiWriteNoteAgendaRequest
{
    public required string NoteId { get; init; }

    public required WriteNoteAgendaRequest Body { get; init; }
}
