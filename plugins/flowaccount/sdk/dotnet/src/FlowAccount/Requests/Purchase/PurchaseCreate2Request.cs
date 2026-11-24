using FlowAccount.Models;

namespace FlowAccount.Requests.Purchase;

/// <summary>
/// The inputs of the PurchaseCreate2 operation.
/// </summary>
public sealed record PurchaseCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
