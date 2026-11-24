namespace FlowAccount.Requests.ProductInventory;

/// <summary>
/// The inputs of the ProductInventoryDeleteProductInventory operation.
/// </summary>
public sealed record ProductInventoryDeleteProductInventoryRequest
{
    public required string? Id { get; init; }

    public required string Culture { get; init; }
}
