namespace FlowAccount.Requests.Purchase;

/// <summary>
/// The inputs of the PurchaseChangeStatusByKey operation.
/// </summary>
public sealed record PurchaseChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
