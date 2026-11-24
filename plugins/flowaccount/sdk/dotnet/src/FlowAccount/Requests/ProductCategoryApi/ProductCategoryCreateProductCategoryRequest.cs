using FlowAccount.Models;

namespace FlowAccount.Requests.ProductCategoryApi;

/// <summary>
/// The inputs of the ProductCategoryCreateProductCategory operation.
/// </summary>
public sealed record ProductCategoryCreateProductCategoryRequest
{
    public required string Culture { get; init; }

    public required ProductCategory Body { get; init; }
}
