namespace FlowAccount.Requests.Purchase;

/// <summary>
/// The inputs of the PurchaseDelete operation.
/// </summary>
public sealed record PurchaseDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
