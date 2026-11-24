namespace FlowAccount.Requests.Products;

/// <summary>
/// The inputs of the ProductsRemove operation.
/// </summary>
public sealed record ProductsRemoveRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
