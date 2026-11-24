using Fellow.Models;

namespace Fellow.Requests.Notes;

/// <summary>
/// The inputs of the AppsDeveloperApiApiGetNotes operation.
/// </summary>
public sealed record AppsDeveloperApiApiGetNotesRequest
{
    public required GetNotesRequest Body { get; init; }
}
