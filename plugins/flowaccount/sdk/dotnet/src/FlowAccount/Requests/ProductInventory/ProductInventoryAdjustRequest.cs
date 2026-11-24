using FlowAccount.Models;

namespace FlowAccount.Requests.ProductInventory;

/// <summary>
/// The inputs of the ProductInventoryAdjust operation.
/// </summary>
public sealed record ProductInventoryAdjustRequest
{
    public required string Culture { get; init; }

    public required StockCard Body { get; init; }
}
