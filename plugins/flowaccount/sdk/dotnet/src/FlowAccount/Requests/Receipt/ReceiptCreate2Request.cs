using FlowAccount.Models;

namespace FlowAccount.Requests.Receipt;

/// <summary>
/// The inputs of the ReceiptCreate2 operation.
/// </summary>
public sealed record ReceiptCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
