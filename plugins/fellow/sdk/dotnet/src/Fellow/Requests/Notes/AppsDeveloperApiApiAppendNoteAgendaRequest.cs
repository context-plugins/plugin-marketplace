using Fellow.Models;

namespace Fellow.Requests.Notes;

/// <summary>
/// The inputs of the AppsDeveloperApiApiAppendNoteAgenda operation.
/// </summary>
public sealed record AppsDeveloperApiApiAppendNoteAgendaRequest
{
    public required string NoteId { get; init; }

    public required AppendNoteAgendaRequest Body { get; init; }
}
