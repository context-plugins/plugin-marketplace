namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the GetProductById operation.
/// </summary>
public sealed record GetProductByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
