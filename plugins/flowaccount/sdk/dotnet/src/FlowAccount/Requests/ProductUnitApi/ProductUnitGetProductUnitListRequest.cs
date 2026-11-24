namespace FlowAccount.Requests.ProductUnitApi;

/// <summary>
/// The inputs of the ProductUnitGetProductUnitList operation.
/// </summary>
public sealed record ProductUnitGetProductUnitListRequest
{
    public required string Culture { get; init; }
}
