namespace DoiT.Requests.Products;

/// <summary>
/// The inputs of the ListProducts operation.
/// </summary>
public sealed record ListProductsRequest
{
    public string? Platform { get; init; }
}
