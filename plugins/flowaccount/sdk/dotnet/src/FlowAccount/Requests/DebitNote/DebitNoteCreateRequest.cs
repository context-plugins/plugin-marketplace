using FlowAccount.Models;

namespace FlowAccount.Requests.DebitNote;

/// <summary>
/// The inputs of the DebitNoteCreate operation.
/// </summary>
public sealed record DebitNoteCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
