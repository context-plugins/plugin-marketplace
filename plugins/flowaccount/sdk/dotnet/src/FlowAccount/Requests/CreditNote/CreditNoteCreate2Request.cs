using FlowAccount.Models;

namespace FlowAccount.Requests.CreditNote;

/// <summary>
/// The inputs of the CreditNoteCreate2 operation.
/// </summary>
public sealed record CreditNoteCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
