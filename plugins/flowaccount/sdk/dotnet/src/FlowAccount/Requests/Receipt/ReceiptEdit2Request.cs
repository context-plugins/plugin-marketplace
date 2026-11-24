using FlowAccount.Models;

namespace FlowAccount.Requests.Receipt;

/// <summary>
/// The inputs of the ReceiptEdit2 operation.
/// </summary>
public sealed record ReceiptEdit2Request
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
