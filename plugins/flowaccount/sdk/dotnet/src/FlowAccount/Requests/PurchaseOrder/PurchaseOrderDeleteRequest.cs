namespace FlowAccount.Requests.PurchaseOrder;

/// <summary>
/// The inputs of the PurchaseOrderDelete operation.
/// </summary>
public sealed record PurchaseOrderDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
