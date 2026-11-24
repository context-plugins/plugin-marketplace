using FlowAccount.Models;

namespace FlowAccount.Requests.Receipt;

/// <summary>
/// The inputs of the ReceiptCreate operation.
/// </summary>
public sealed record ReceiptCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
