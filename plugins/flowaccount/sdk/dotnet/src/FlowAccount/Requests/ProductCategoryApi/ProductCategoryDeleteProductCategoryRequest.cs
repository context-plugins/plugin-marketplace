namespace FlowAccount.Requests.ProductCategoryApi;

/// <summary>
/// The inputs of the ProductCategoryDeleteProductCategory operation.
/// </summary>
public sealed record ProductCategoryDeleteProductCategoryRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
