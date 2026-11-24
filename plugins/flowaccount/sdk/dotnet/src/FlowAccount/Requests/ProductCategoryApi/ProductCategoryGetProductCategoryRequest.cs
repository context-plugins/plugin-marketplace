namespace FlowAccount.Requests.ProductCategoryApi;

/// <summary>
/// The inputs of the ProductCategoryGetProductCategory operation.
/// </summary>
public sealed record ProductCategoryGetProductCategoryRequest
{
    public required string Culture { get; init; }

    public int CurrentPage { get; init; } = 0;

    public int PageSize { get; init; } = 20;
}
