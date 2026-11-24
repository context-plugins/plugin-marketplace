using FlowAccount.Models;

namespace FlowAccount.Requests.BillingNote;

/// <summary>
/// The inputs of the BillingNoteEdit2 operation.
/// </summary>
public sealed record BillingNoteEdit2Request
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
