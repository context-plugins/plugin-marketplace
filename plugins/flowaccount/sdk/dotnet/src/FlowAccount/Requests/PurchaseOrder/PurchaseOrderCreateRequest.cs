using FlowAccount.Models;

namespace FlowAccount.Requests.PurchaseOrder;

/// <summary>
/// The inputs of the PurchaseOrderCreate operation.
/// </summary>
public sealed record PurchaseOrderCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
