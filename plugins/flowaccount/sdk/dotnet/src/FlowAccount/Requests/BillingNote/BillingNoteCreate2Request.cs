using FlowAccount.Models;

namespace FlowAccount.Requests.BillingNote;

/// <summary>
/// The inputs of the BillingNoteCreate2 operation.
/// </summary>
public sealed record BillingNoteCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
