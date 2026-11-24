namespace FlowAccount.Requests.Products;

/// <summary>
/// The inputs of the ProductsGetById operation.
/// </summary>
public sealed record ProductsGetByIdRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
