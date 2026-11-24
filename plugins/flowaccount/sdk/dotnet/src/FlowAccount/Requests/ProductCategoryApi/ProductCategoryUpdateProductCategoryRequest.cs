using FlowAccount.Models;

namespace FlowAccount.Requests.ProductCategoryApi;

/// <summary>
/// The inputs of the ProductCategoryUpdateProductCategory operation.
/// </summary>
public sealed record ProductCategoryUpdateProductCategoryRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required ProductCategory Body { get; init; }
}
