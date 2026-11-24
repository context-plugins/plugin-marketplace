using FlowAccount.Models;

namespace FlowAccount.Requests.CreditNote;

/// <summary>
/// The inputs of the CreditNoteCreate operation.
/// </summary>
public sealed record CreditNoteCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
