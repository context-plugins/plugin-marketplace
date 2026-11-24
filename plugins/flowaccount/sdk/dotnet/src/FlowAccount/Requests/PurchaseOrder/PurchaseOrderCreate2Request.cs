using FlowAccount.Models;

namespace FlowAccount.Requests.PurchaseOrder;

/// <summary>
/// The inputs of the PurchaseOrderCreate2 operation.
/// </summary>
public sealed record PurchaseOrderCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
