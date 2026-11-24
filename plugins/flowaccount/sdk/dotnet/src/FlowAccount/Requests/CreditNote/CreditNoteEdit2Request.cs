using FlowAccount.Models;

namespace FlowAccount.Requests.CreditNote;

/// <summary>
/// The inputs of the CreditNoteEdit2 operation.
/// </summary>
public sealed record CreditNoteEdit2Request
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
