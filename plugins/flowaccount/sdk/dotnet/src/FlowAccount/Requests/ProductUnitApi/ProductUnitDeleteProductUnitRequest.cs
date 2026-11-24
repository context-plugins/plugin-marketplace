namespace FlowAccount.Requests.ProductUnitApi;

/// <summary>
/// The inputs of the ProductUnitDeleteProductUnit operation.
/// </summary>
public sealed record ProductUnitDeleteProductUnitRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
