using FlowAccount.Models;

namespace FlowAccount.Requests.DebitNote;

/// <summary>
/// The inputs of the DebitNoteEdit operation.
/// </summary>
public sealed record DebitNoteEditRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
