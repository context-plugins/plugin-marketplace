using Paid.Models;

namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the UpdateProductById operation.
/// </summary>
public sealed record UpdateProductByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdateProductRequest? Body { get; init; }
}
