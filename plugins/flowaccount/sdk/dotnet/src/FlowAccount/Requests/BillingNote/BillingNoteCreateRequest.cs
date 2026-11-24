using FlowAccount.Models;

namespace FlowAccount.Requests.BillingNote;

/// <summary>
/// The inputs of the BillingNoteCreate operation.
/// </summary>
public sealed record BillingNoteCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
