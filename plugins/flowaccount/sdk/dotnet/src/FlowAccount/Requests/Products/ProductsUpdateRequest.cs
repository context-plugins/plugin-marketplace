using FlowAccount.Models;

namespace FlowAccount.Requests.Products;

/// <summary>
/// The inputs of the ProductsUpdate operation.
/// </summary>
public sealed record ProductsUpdateRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required ProductResult Body { get; init; }
}
