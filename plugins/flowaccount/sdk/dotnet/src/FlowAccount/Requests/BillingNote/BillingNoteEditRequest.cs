using FlowAccount.Models;

namespace FlowAccount.Requests.BillingNote;

/// <summary>
/// The inputs of the BillingNoteEdit operation.
/// </summary>
public sealed record BillingNoteEditRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
