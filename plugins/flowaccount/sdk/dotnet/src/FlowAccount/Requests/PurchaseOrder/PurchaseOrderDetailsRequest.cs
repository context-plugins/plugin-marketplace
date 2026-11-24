namespace FlowAccount.Requests.PurchaseOrder;

/// <summary>
/// The inputs of the PurchaseOrderDetails operation.
/// </summary>
public sealed record PurchaseOrderDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
