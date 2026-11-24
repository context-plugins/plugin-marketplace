using FlowAccount.Models;

namespace FlowAccount.Requests.DebitNote;

/// <summary>
/// The inputs of the DebitNoteCreate2 operation.
/// </summary>
public sealed record DebitNoteCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
