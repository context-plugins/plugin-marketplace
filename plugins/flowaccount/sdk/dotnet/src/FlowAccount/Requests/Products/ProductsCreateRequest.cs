using FlowAccount.Models;

namespace FlowAccount.Requests.Products;

/// <summary>
/// The inputs of the ProductsCreate operation.
/// </summary>
public sealed record ProductsCreateRequest
{
    public required string Culture { get; init; }

    public required ProductResult Body { get; init; }
}
