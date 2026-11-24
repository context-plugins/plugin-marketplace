using FlowAccount.Models;

namespace FlowAccount.Requests.Receipt;

/// <summary>
/// The inputs of the ReceiptEdit operation.
/// </summary>
public sealed record ReceiptEditRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
