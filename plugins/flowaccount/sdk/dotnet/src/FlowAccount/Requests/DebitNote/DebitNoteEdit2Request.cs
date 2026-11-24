using FlowAccount.Models;

namespace FlowAccount.Requests.DebitNote;

/// <summary>
/// The inputs of the DebitNoteEdit2 operation.
/// </summary>
public sealed record DebitNoteEdit2Request
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
