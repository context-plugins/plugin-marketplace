using Fellow.Models;

namespace Fellow.Requests.Notes;

/// <summary>
/// The inputs of the AppsDeveloperApiApiPrependNoteAgenda operation.
/// </summary>
public sealed record AppsDeveloperApiApiPrependNoteAgendaRequest
{
    public required string NoteId { get; init; }

    public required PrependNoteAgendaRequest Body { get; init; }
}
