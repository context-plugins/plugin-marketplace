using FlowAccount.Models;

namespace FlowAccount.Requests.CreditNote;

/// <summary>
/// The inputs of the CreditNoteEdit operation.
/// </summary>
public sealed record CreditNoteEditRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
