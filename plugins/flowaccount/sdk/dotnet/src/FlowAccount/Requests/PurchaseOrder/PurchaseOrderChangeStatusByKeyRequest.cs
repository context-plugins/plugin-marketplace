namespace FlowAccount.Requests.PurchaseOrder;

/// <summary>
/// The inputs of the PurchaseOrderChangeStatusByKey operation.
/// </summary>
public sealed record PurchaseOrderChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
